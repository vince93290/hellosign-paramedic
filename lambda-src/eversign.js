// functions/hellosign.js

require('dotenv').config()
const axios = require('axios')

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

  const opts = JSON.stringify({
    sandbox: 1,
    template_id: data.body.isTaxi
      ? 'bf3bfc2a90a0408287b0b1ab3930f597'
      : 'f11c974e6c2743229ae8fc16f4b95217',
    title: `Contrat (${data.body.isTaxi ? 'Taxi' : 'Ambulance'}) de ${
      data.body.name
    } ${data.body.firstname} pour la société ${data.body.entreprise}`,
    message: `Un contrat de prestation de services Paramedic (${
      data.body.isTaxi ? 'Taxi' : 'Ambulance'
    }) vient d'etres signer par ${data.body.firstname} ${
      data.body.name
    } pour la société ${data.body.entreprise} .
    `,
    custom_requester_name: 'Paramedic',
    custom_requester_email: '',
    client: '',
    embedded_signing_enabled: 1,
    signers: [
      {
        role: 'user',
        name: data.body.name,
        email: data.body.email,
        language: 'fr'
      }
    ],
    recipients: [
      {
        role: 'Assistant',
        name: 'Paramedic.tech',
        email: 'paramedic.dev@gmail.com',
        language: 'fr'
      }
    ],
    fields: [
      {
        identifier: data.body.isTaxi
          ? 'entreprise_OqumJW0ZU0Dlzx'
          : 'entreprise_sS85nmxnS0WEKg',
        value: data.body.entreprise
      },
      {
        identifier: data.body.isTaxi
          ? 'name_4K5veKLCY5LOHR'
          : 'name_upC2i7hHBt3aSm',
        value: `${data.body.name} ${data.body.firstname}`
      }
    ]
  })

  return axios
    .post(
      'https://api.eversign.com/api/document?access_key=3b6f67e4b8b3cd90a03fbfcb7dd4eeba&business_id=253385',
      opts
    )
    .then(res => {
      console.log('sended:', res)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          url: res.data.signers[0].embedded_signing_url,
          hash: res.data.document_hash
        })
      }
    })
    .catch(err => {
      // console.log("not send", err);
    })

  // console.log(url)
}
