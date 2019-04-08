export const state = () => ({
  term_checked: false,
  text_area: '',
  email: '',
  phone: '',
  username: '',
  valid_form: false,
  form_name: '',
  form_id: '',
  form_pattern: '',
  datetime: ''
})

export const mutations = {
  setFormDataFromStore(state, payload) {
    state.term_checked = payload.data.term_checked
    state.text_area = payload.data.text_area
    state.email = payload.data.email
    state.phone = payload.data.phone
    state.username = payload.data.username
    state.form_name = payload.form_name
    state.form_id = payload.form_id
    state.form_pattern = payload.form_pattern
    state.datetime = payload.data.datetime
  },
  clearFormDataFromStore(state, payload) {
    state.term_checked = false,
      state.text_area = '',
      state.email = '',
      state.phone = '',
      state.username = '',
      state.valid_form = false,
      state.form_name = '',
      state.form_id = '',
      state.form_pattern = ''
    state.datetime = ''
  },
  addPhoneNumber(state, payload) {
    state.phone = payload
  },
  addUserName(state, payload) {
    state.username = payload
  },
  addDateTime(state, payload) {
    state.datetime = payload
  }
}

export const actions = {
  setFormDataFromStore(context, payload) {
    context.commit('setFormDataFromStore', payload)
  },

  clearFormDataFromStore(context, payload) {
    context.commit('clearFormDataFromStore', payload)
  },

  addPhoneNumber(context, payload){
    context.commit('addPhoneNumber', payload)
  },

  addUserName(context, payload) {
    context.commit('addUserName', payload)
  },

  addDateTime(context, payload) {
    context.commit('addDateTime', payload)
  }
}
