export default function ({$axios, redirect}) {
  $axios.onRequest(config => {
    const d = JSON.parse(sessionStorage.getItem('my_form'))
    console.log('Making request to ' + config.url)
    if (d) {
      console.log(d.authModule)
      const access_token = d.auth.access_token
      if (access_token) {
        config.headers.Authorization = 'JWT ' + access_token
      }
    }
    return config
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
