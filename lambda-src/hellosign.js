// functions/hellosign.js

require('dotenv').config()
const hellosign = require('hellosign-sdk')({
  key: 'cb335f06401d38f03d23985c3d88c0c0736e394fb6807e68a0009e24613c278f'
})

exports.handler = async (event, context, callback) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }

  if (event.httpMethod !== 'POST' || !event.body) {
    // console.log("invalid http method log");
    return {
      statusCode: 200,
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
    clientId: 'd19619b3fa8d9657c0e9629013f4e514',
    subject: 'NDA with Acme Co.',
    message: 'Please sign this NDA and then we can discuss more.?',
    signers: [
      {
        email_address: 'vince93290@hotmail.fr',
        name: 'vincent'
      }
    ],
    file_url: [
      'https://madalenacouture.fr/wp-content/uploads/2020/12/contrat.pdf'
    ]
  }

  const signature = await hellosign.signatureRequest
    .createEmbedded(opts)
    .then(res => {
      return res.signature_request.signatures
    })

  if (signature) {
    const url = await hellosign.embedded
      .getSignUrl(signature[0].signature_id)
      .then(result => {
        console.log('The sign url is: ' + result.embedded.sign_url)
        return result.embedded.sign_url
      })

    console.log(url)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        url: url
      })
    }
  }
}
