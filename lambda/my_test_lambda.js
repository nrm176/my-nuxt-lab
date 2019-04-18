export async function handler(event, context, callback) {

  console.log('just testing....')

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.MY_ENV
    })
  })
}
