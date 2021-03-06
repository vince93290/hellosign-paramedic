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
      statusCode: 200, // tres important
      headers,
      body: JSON.stringify({
        status: 'This was not a POST request!'
      })
    }
  }

  const data = JSON.parse(event.body)
  // console.log(data)

  const opts = {
    test_mode: 1,
    clientId: 'd19619b3fa8d9657c0e9629013f4e514',
    template_id: 'e940c5e6353b6ca5b42431da70a8f19756947878',
    subject: `Contrat de ${data.body.name} ${data.body.firstname} pour la société ${data.body.entreprise}`,
    message: `Un contrat de prestation de services Paramedic (${
      data.body.isTaxi ? 'Taxi' : 'Ambulance'
    }) vient d'etres signer par ${data.body.firstname} ${
      data.body.name
    } pour la société ${data.body.entreprise} .
    `,
    signers: [
      {
        email_address: data.body.email,
        name: data.body.name,
        role: 'user'
      }
    ],
    ccs: [{ email_address: 'vince93290@hotmail.fr', role_name: 'me' }],
    custom_fields: [
      {
        name: 'entreprise',
        value: data.body.entreprise,
        editor: 'user'
      },
      {
        name: 'represantant',
        value: data.body.name,
        editor: 'user'
      }
    ]
  }

  const signature = await hellosign.signatureRequest
    .createEmbeddedWithTemplate(opts)
    .then(res => {
      console.log(res)
      return res.signature_request.signatures
    })

  if (signature) {
    const url = await hellosign.embedded
      .getSignUrl(signature[0].signature_id)
      .then(result => {
        console.log('The sign url is: ' + result)
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
