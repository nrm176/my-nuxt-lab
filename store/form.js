export const state = () => ({
  term_checked: false,
  text_area: '',
  email: '',
  phone: '',
  user_name: '',
  valid_form: false,
  form_name: '',
  form_id: '',
  form_pattern: ''
})

export const mutations = {
  setFormDataFromStore(state, payload) {
    state.term_checked = payload.data.term_checked
    state.text_area = payload.data.text_area
    state.email = payload.data.email
    state.phone = payload.data.phone
    state.user_name = payload.data.user_name
    state.form_name = payload.form_name
    state.form_id = payload.form_id
    state.form_pattern = payload.form_pattern
  },
  clearFormDataFromStore(state, payload) {
    state.term_checked = false,
      state.text_area = '',
      state.email = '',
      state.phone = '',
      state.user_name = '',
      state.valid_form = false,
      state.form_name = '',
      state.form_id = '',
      state.form_pattern = ''
  }
}

export const actions = {
  setFormDataFromStore(context, payload) {
    context.commit('setFormDataFromStore', payload)
  },

  clearFormDataFromStore(context, payload) {
    context.commit('clearFormDataFromStore', payload)
  }
}
