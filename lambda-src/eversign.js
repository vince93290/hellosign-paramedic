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

  const mixedData = {
    id: '021a97a6d9d14cbea6f069b41b3896fb',
    name: 'Ambulance | Taxi',
    entreprise: 'entreprise_aKKZ5byZF8bac3',
    adresse: 'adresse_Ij74t7rOMH09B1',
    fonction: 'fonction_CuF34M24z4WSNf',
    telephone: 'telephone_2gDaYlAL8b4ZvY',
    email: 'email_UJz1tHcv9Qca1U'
  }

  const ambulanceData = {
    id: '62f4ddebe5424dd6ac639e460df05bad',
    name: 'Ambulance',
    entreprise: 'entreprise_QFYEPbkVT4BPKm',
    adresse: 'adresse_nTXoSqg9yrMMlt',
    fonction: 'fonction_VdOcIerADqLYU5',
    telephone: 'telephone_QTqVx8v7Uq7Jcj',
    email: 'email_xrtUnLKqc0ZFej'
  }

  const taxiData = {
    id: 'e5f2c007c19e4adc8e1402e6fc5b5796',
    name: 'Taxi',
    entreprise: 'entreprise_XSu2PBDJxxvLXW',
    adresse: 'adresse_OHHrfidfwQtwJK',
    fonction: 'fonction_wg6iZCydy7uPFC',
    telephone: 'telephone_ZICxCph2kaQHUE',
    email: 'email_WkZorkIuQrsmMH'
  }

  const data = JSON.parse(event.body)
  // console.log(data)

  let contractSelected

  if (data.body.contractType === 'mixed') {
    contractSelected = mixedData
  } else if (data.body.contractType === 'ambulance') {
    contractSelected = ambulanceData
  } else {
    contractSelected = taxiData
  }

  const opts = JSON.stringify({
    sandbox: 0,
    template_id: contractSelected.id,
    title: `Contrat (${contractSelected.name}) de ${
      data.body.name
    } ${data.body.firstname} pour la société ${data.body.entreprise}`,
    message: `Un contrat de prestation de services Paramedic (${
      contractSelected.name
    }) vient d'etres signer par ${data.body.firstname} ${
      data.body.name
    } pour la société ${data.body.entreprise} .
    `,
    custom_requester_name: 'Paramedic.tech',
    custom_requester_email: 'support@paramedic.tech',
    client: '',
    embedded_signing_enabled: 1,
    signers: [
      {
        role: 'user',
        name: ` ${data.body.firstname} ${data.body.name}`,
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
      },
      {
        role: 'support',
        name: 'Paramedic support',
        email: 'support@paramedic.tech',
        language: 'fr'
      }
    ],
    fields: [
      {
        identifier: contractSelected.entreprise,
        value: data.body.entreprise
      },
      {
        identifier: contractSelected.adresse,
        value: data.body.completeAdress
      },
      {
        identifier: contractSelected.fonction,
        value: data.body.fonction
      },
      {
        identifier: contractSelected.telephone,
        value: data.body.phone
      },
      {
        identifier: contractSelected.email,
        value: data.body.email
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
