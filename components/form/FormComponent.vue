<template>
  <div class="box">

    <div v-if="!isEditMode">
      この内容で送信します。よろしいですか。
    </div>

    <UserName ref="user_name" :edit-mode="isEditMode" :validation-on="true"/>
    <PhoneNumber ref="phone_number" :edit-mode="isEditMode" :validation-on="true"/>
    <ReservationDatetime ref="datetime" :edit-mode="isEditMode" :validation-on="true"/>
    <BuefyDatepicker />
    <BuefyTimepicker />
    <CheckBox :edit-mode="isEditMode"/>
    <BuefyCheckbox />
    <SelectBox />
    <Rule :edit-mode="isEditMode" :validation-on="true" />
    <div v-if="isEditMode">
      <button class="button" @click="submitForm">この内容で送る</button>
    </div>
    <div v-else>
      <button class="button" @click="setEditMode">編集する</button>
      <button class="button" @click="">送信する</button>
    </div>
    <div v-if="!isEditMode">
      {{form_data}}
    </div>
  </div>
</template>

<script>
  import UserName from "./field/UserName";
  import PhoneNumber from "./field/PhoneNumber";
  import ReservationDatetime from "./field/ReservationDatetime";
  import Rule from "./field/Rule";
  import CheckBox from "./field/CheckBox";
  import BuefyDatepicker from "./field/BuefyDatepicker";
  import BuefyTimepicker from "./field/BuefyTimepicker";
  import BuefyCheckbox from "./field/BuefyCheckbox";
  import SelectBox from "./field/SelectBox";


  export default {
    name: "FormComponent",
    components: {
      SelectBox,
      BuefyCheckbox,
      BuefyTimepicker, BuefyDatepicker, CheckBox, PhoneNumber, UserName, ReservationDatetime, Rule},
    data() {
      return {
        form_data: {},
        isEditMode: true
      }
    },
    methods: {
      getChildData() {
        return {
          user_name: this.$store.state.form.data.username,
          phone_number: this.$store.state.form.data.phone,
          datetime: this.$store.state.form.data.datetime,
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
          this.form_data = this.getChildData()
          this.isEditMode = false
        } else {
          console.log('Not good to submit')
        }
      }
    }
  }
</script>

<style scoped>

</style>
