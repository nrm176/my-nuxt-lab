export async function handler(event, context, callback) {

  console.log(process.env.IS_DEV)

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.VARNAME
    })
  })
}
