<template>
  <div class="box" id="formsubmit">
    <div class="content has-text-left">
      <h1>この内容で送信します。よろしいですか</h1>
      <h2>お名前</h2>
      <p>{{ form_data.user_name }}</p>

      <h2>電話番号</h2>
      <p>{{ form_data.phone }}</p>

      <h2>メールアドレス</h2>
      <p>{{ form_data.email }}</p>

      <h2>問い合わせ内容</h2>
      <p>{{ form_data.text_area }}</p>

    </div>

    <vue-recaptcha @verify="onVerify" size="normal" sitekey="6Ld9fJYUAAAAAGqdZMmctq0fxA_ehZdPqhnLAiZm"></vue-recaptcha>

    <div class="is-flex">
      <button class="button is-light" type="submit" @click="backToForm">戻る</button>

      <button class="button is-link" style="margin-left: 0.5rem;" v-bind:class="{'is-loading':loading}" :disabled="isDisabled" @click="handleSubmit">
        送信する
      </button>
    </div>
    <div v-if="error_msg" style="margin-top: 0.5rem;">
      <div class="notification is-warning">
        {{error_msg}}
      </div>
    </div>
  </div>

</template>

<script>
  import axios from "axios";
  import VueRecaptcha from 'vue-recaptcha';

  export default {
    name: "ConfirmSubmission",
    head: {
      script: [
        {src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit', defer: true}
      ],
    },
    components: {VueRecaptcha},
    data: () => ({
      ok_to_submit: false,
      error_msg: '',
      token: '',
      loading: false
    }),
    mounted() {
    },
    computed: {
      form_data() {
        return this.$store.state.form
      },
      isDisabled() {
        return !this.ok_to_submit
      },
    },
    methods: {
      onVerify(response) {
        if (response != undefined) {
          this.ok_to_submit = true
          this.token = response

        }
      },
      backToForm() {
        this.$router.go(-1)
      },
      validate() {
        const form_data = this.form_data
        if (form_data.text_area === '') {
          return false
        }
        return true
      },
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      async handleSubmit() {
        this.ok_to_submit = false
        this.loading = true

        const flag = this.validate()
        if (!flag) {
          this.error_msg = '問い合わせ内容がありません'
          this.ok_to_submit = true
          this.loading = false
          return
        }

        try {
          const token = this.token
          const axiosConfig = {
            header: {"Content-Type": "application/x-www-form-urlencoded"}
          };
          if (token !== undefined) {
            axios.post(
              `${process.env.function_url}/sendmail_thru_sendgrid`,
              this.encode({
                "recaptchakey": token,
                ...this.form_data
              }),
              axiosConfig
            ).then((response) => {
              if (response.status == 200) {
                this.$router.push('/thank-you')
              } else {
                this.error_msg = 'システムエラーにより現在問い合わせフォームが機能していません。申し訳ありません。'
                this.ok_to_submit = true
                this.loading = false
              }
            }).catch(() => {
              this.error_msg = 'システムエラーにより現在問い合わせフォームが機能していません。申し訳ありません。'
              this.ok_to_submit = true
              this.loading = false
            });
          } else {
            this.error_msg = '「ボットでありません」を選択してください'
            this.ok_to_submit = true
            this.loading = false
          }
        } catch (e) {
          console.log('Error:', e)
          this.error_msg = '「ボットでありません」を選択してください'
          this.ok_to_submit = true
          this.loading = false

        }
      }
    }
  }
</script>

<style scoped>

</style>
