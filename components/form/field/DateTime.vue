<template>
  <div class="field">
    <label class="label">日時</label>

    <div v-if="!$props.editMode">
      <div>{{}}</div>
    </div>
    <div v-else>

      <div class="control has-icons-left has-icons-right">

        <span class="icon is-small is-left"><i class="far fa-clock"></i></span>

      </div>
      <div v-if="validationOn">
        <no-ssr>
          <span v-show="errors.has('datetime')" class="help is-success">{{ errors.first('datetime') }}</span>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DateTime",
      props: {
        editMode: Boolean,
        validationOn: Boolean
      },
    }
</script>

<style scoped>

</style>
