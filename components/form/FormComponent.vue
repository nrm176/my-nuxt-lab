<template>
  <div class="box">
    <UserName ref="user_name" :edit-mode="isEditMode" :validation-on="true"/>
    <PhoneNumber ref="phone_number" :edit-mode="isEditMode" :validation-on="true"/>
    <ReservationDatetime ref="datetime" :edit-mode="isEditMode" :validation-on="true"/>

    <button class="button" @click="submitForm">送信する</button>
    <button class="button" @click="setEditMode">編集する</button>
    <div>
      {{form_data}}
    </div>
  </div>
</template>

<script>
  import UserName from "./field/UserName";
  import PhoneNumber from "./field/PhoneNumber";
  import ReservationDatetime from "./field/ReservationDatetime";

  export default {
    name: "FormComponent",
    components: {PhoneNumber, UserName, ReservationDatetime},
    data() {
      return {
        form_data: {},
        isEditMode: true
      }
    },
    methods: {
      getChildData() {
        return {
          user_name: this.$store.state.form.user_name,
          phone_number: this.$store.state.form.phone,
          datetime: this.$store.state.form.datetime,
        }
      },
      setEditMode() {
        this.isEditMode = !this.isEditMode
      },
      async submitForm() {
        const v1 = await this.$refs.user_name.isValid()
        const v2 = await this.$refs.phone_number.isValid()
        const v3 = await this.$refs.datetime.isValid()

        if (v1 && v2 && v3){
          console.log('OK to submit')
          const formData = this.getChildData()
          console.log(formData)
        } else {
          console.log('Not good to submit')
        }
      }
    }
  }
</script>

<style scoped>

</style>
