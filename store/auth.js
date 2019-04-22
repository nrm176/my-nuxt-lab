
export const state = () => ({
  username: '',
  password: '',
  isLoggedIn: false,
  access_token: ''
})


export const mutations = {
  setUserInfo(state, payload) {
    state.username = payload.user.username
    state.isLoggedIn = true
  },

  setAccessToken(state, payload){
    state.access_token = payload
  }

}

export const actions = {
  login (context, payload) {
    return this.$axios.post('/auth/jwt/create/', {
      'username': payload.username,
      'password': payload.password
    })
      .then(response => {
        context.commit('setAccessToken', response.data.access)
        return context.dispatch('reload')
          .then(user => user)
      })
  },
  reload (context) {
    return this.$axios.get('/auth/users/me/')
      .then(response => {
        const user = response.data
        context.commit('setUserInfo', { user: user })
        return user
      })
  }
}
