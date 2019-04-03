import * as SendGrid from "@sendgrid/mail";
const axios = require('axios');
const querystring = require('querystring');
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET

SendGrid.setApiKey(process.env.SENDGRID_API_KEY)


const headers = {
  "Access-Control-Allow-Origin": process.env.URL, // better change this for production
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type"
};


async function send_email_using_sendgrid(payload) {

  const msg_to_me = {
    to: 'kojima37@gmail.com',
    from: 'support@beststage.com',
    subject: 'お問い合わせ',
    html: `<h1>${payload.form_name} ${payload.form_id}</h1>
          <h2>問い合わせ</h2>
          <h3>名前</h3>
          <p>${payload.user_name}</p>
          <h3>電話番号</h3>
          <p>${payload.phone}</p>
          <h3>メールアドレス</h3>
          <p>${payload.email}</p>
          <h3>内容</h3>
          <p>${payload.text_area}</p>`
  }

  const msg_to_user = {
    to: `${payload.email}`,
    from: 'support@beststage.com',
    subject: 'お問い合わせありがとうございます',
    html: `<h1>${payload.form_name} ${payload.form_id}</h1>
          <h2>問い合わせ</h2>
          <h3>名前</h3>
          <p>${payload.user_name}</p>
          <h3>電話番号</h3>
          <p>${payload.phone}</p>
          <h3>メールアドレス</h3>
          <p>${payload.email}</p>
          <h3>内容</h3>
          <p>${payload.text_area}</p>`
  }


  const to_user_result = await SendGrid.send(msg_to_user).then(info => {
    return {
      flag: true,
      data: info,
    }
  }).catch(error => {
    return {
      flag: false,
      data: error
    }
  });

  const to_me_result = await SendGrid.send(msg_to_me).then(info => {
    return {
      flag: true,
      data: info,
    }
  }).catch(error => {
    return {
      flag: false,
      data: error
    }
  });

  return to_user_result && to_me_result
}


async function verifyRecaptcha(key) {
  console.log('verifyRecaptcha........')
  const response = await axios.get("https://www.google.com/recaptcha/api/siteverify?secret=" + RECAPTCHA_SECRET + "&response=" + key);
  return response.data
}


export async function handler(event, context, callback) {

  const origin = event.headers.origin
  if (origin !== process.env.URL) {
    return callback(null, {
      statusCode: 403,
    })
  }


  //Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 410,
      headers,
      body: JSON.stringify({
        message: 'Request not allowed'
      })
    })
  }

  const payload = querystring.parse(event.body)

  if (!payload.recaptchakey) {
    return callback(null, {
      statusCode: 422,
      headers,
      body: JSON.stringify({
        message: 'Missing required info'
      })

    })
  } else {

    const recaptchaKey = payload.recaptchakey
    const flag = await verifyRecaptcha(recaptchaKey)

    if (flag.success === true) {
      console.log('recaptcha verification passed')

      const result = await send_email_using_sendgrid(payload)
      if (result.flag) {
        return callback(null, {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            message: 'Form has been sent!'
          })


        })
      } else {
        return callback(null, {
          statusCode: 410,
          headers,
          body: JSON.stringify({
            message: 'failed to send email'
          })
        })
      }

    } else {
      console.log('recaptcha verification did not passed')
      return callback(null, {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: 'Something is wrong with recaptcha'
        })
      })
    }

  }

}

// Local test
// (async () => {
//   send_email_using_nodemailer()
// })()
