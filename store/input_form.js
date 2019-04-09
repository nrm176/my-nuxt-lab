export const state = () => ({
  rawdata: {
    text: ''
  },
  properties: {
    delimiter_pattern: ','
  }
})

export const mutations = {
  setRawDataText(state, payload) {
    state.rawdata.text = payload.text
  }
}

export const actions = {
  setRawDataText(context, payload) {
    context.commit('setRawDataText', payload)
  }
}
