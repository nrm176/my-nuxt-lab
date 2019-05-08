<template>
  <div id="contact-form">
    <section class="section">
      <div class="section_title has-text-centered">
        <h1 class="title is-1">Contact</h1>
        <h2 class="subtitle is-5">お気軽にお問い合わせください</h2>
      </div>
      <div id="FormTemplate" class="has-text-left">
        <div class="field">
          <label class="label">名前</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="text" placeholder="お名前" value=""
                   name="user_name"
                   v-model="form.user_name"
                   data-vv-as="名前"
                   v-validate="'required'"
            >
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>

          </div>
          <no-ssr>
            <span v-show="errors.has('user_name')" class="help is-success">{{ errors.first('user_name') }}</span>
          </no-ssr>
        </div>

        <div class="field">
          <label class="label">電話番号(ハイフンなし)</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="tel" placeholder="電話番号" value=""
                   name="phone"
                   v-model="form.phone"
                   v-validate="'numeric|alpha_num'"
            >
            <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
          </div>
          <no-ssr>
            <span v-show="errors.has('phone')" class="help is-success">{{ errors.first('phone') }}</span>
          </no-ssr>

        </div>

        <div class="field">
          <label class="label">メールアドレス</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="email" placeholder="Email" value=""
                   name="email"
                   v-model="form.email"
                   v-validate="'required|email'"
            >
            <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
          </div>
          <no-ssr>
            <span v-show="errors.has('email')" class="help is-success">{{ errors.first('email') }}</span>
          </no-ssr>
        </div>

        <div class="field">
          <label class="label">内容</label>
          <div class="control">
            <textarea name="text_area" class="textarea"
                      placeholder="問い合わせ内容を入力してください"
                      v-model="form.text_area"
                      v-validate="'required'"></textarea>
          </div>
          <no-ssr>
            <span v-show="errors.has('text_area')" class="help is-success">{{ errors.first('text_area') }}</span>
          </no-ssr>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" id="checkbox" name="term_checked"
                     v-model="form.term_checked"
                     v-validate="'required'">
              <span>
              <a v-on:click="launch">個人情報保護指針</a>に同意する
            </span>
            </label>
            <no-ssr>
              <span v-show="errors.has('term_checked')"
                    class="help is-success">{{ errors.first('term_checked') }}</span>
            </no-ssr>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link"
                    @click="validateAndSubmit">送信内容を確認する</button>
          </div>
        </div>
      </div>

      <div class="modal" v-bind:class="{'is-active':form.isActive}">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="content has-text-centered">
              <div class="control">
                <TermAndCondition/>
              </div>
            </div>
          </div>
        </div>
        <button @click="close" class="modal-close"></button>
      </div>
    </section>
  </div>
</template>

<script>
  import TermAndCondition from "@/components/form/TermAndCondition";

  export default {
    name: "ContactForm",
    components: {TermAndCondition},
    props: {
      formName: String,
      formId: String,
      formPattern: String
    },
    data() {
      return {
        form: {
          picked: '',
          selected: '',
          text_area: '',
          email: '',
          user_name: '',
          phone: '',
        },
        isActive: false
      }
    },
    mounted() {
      const d = JSON.parse(sessionStorage.getItem('my_form'))
      if (d === null) {
        this.form = {
          picked: '',
          selected: '',
          text_area: '',
          email: '',
          user_name: '',
          phone: '',
        }
      } else {
        this.form = d.form

      }
    },
    methods: {
      launch() {
        this.isActive = true;
      },
      close() {
        this.isActive = !this.isActive
      },
      SubmitForm() {
        const payload = {
          'data': this.$data.form,
          'form_name': this.$props.formName,
          'form_id': this.$props.formId,
          'form_pattern': this.$props.formPattern
        }

        this.$store.dispatch('form/setFormDataFromStore', payload)
        this.$router.push({path: '/confirm', force: true})

      },
      validateAndSubmit(e) {
        this.$validator.validateAll().then(x => {
          if (x) {
            this.SubmitForm()
          }
        }).catch(e => {
          return e
        })

      }
    }
  }
</script>

<style scoped>

</style>
