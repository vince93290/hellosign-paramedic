// functions/hellosign.js

require('dotenv').config()
const hellosign = require('hellosign-sdk')({
  key: 'cb335f06401d38f03d23985c3d88c0c0736e394fb6807e68a0009e24613c278f'
})

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept'
}

exports.handler = async (event, context, callback) => {
  console.log(event.httpMethod)
  if (event.httpMethod !== 'POST' || !event.body) {
    // console.log("invalid http method log");
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'This was not a POST request!'
      })
    }
  }

  const data = JSON.parse(event.body)
  console.log(data)

  const opts = {
    test_mode: 1,
    clientId: 'b6b8e7deaf8f0b95c029dca049356d4a2cf9710a',
    subject: 'NDA with Acme Co.',
    message: 'Please sign this NDA and then we can discuss more.?',
    signers: [
      {
        email_address: 'vince93290@hotmail.fr',
        name: 'vincent'
      }
    ]
  }

  hellosign.signatureRequest
    .createEmbedded(opts)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
