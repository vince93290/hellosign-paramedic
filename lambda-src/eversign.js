// functions/hellosign.js

require('dotenv').config()
const axios = require('axios')

let HEADERS = {
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json', //optional
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '8640'
}

HEADERS['Access-Control-Allow-Origin'] = '*'
HEADERS['Vary'] = 'Origin'

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
      HEADERS,
      body: JSON.stringify({
        status: 'This was not a POST request!'
      })
    }
  }

  const mixedData = {
    id: '8c4a5932203540479530d4dc45cd7fac',
    name: 'Ambulance | Taxi',
    entreprise: 'entreprise_8TNezFK6yNakxO',
    adresse: 'adresse_nmhUoW3abRqZQ0',
    fonction: 'fonction_a1KsZ6Qju39mBq',
    telephone: 'telephone_tKVXAq4a8h82q4',
    email: 'email_Y2VUxvS2RtnfLl'
  }

  const ambulanceData = {
    id: '62f4ddebe5424dd6ac639e460df05bad',
    name: 'Ambulance',
    entreprise: 'entreprise_lxCDW4R3izoroT',
    adresse: 'adresse_FH2uhqEXv5uKhK',
    fonction: 'fonction_WsbudXYEywkimy',
    telephone: 'telephone_pJLbKORoNMEaDY',
    email: 'email_jNEE0khQKfONbk'
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
    title: `Contrat (${contractSelected.name}) de ${data.body.name} ${data.body.firstname} pour la société ${data.body.entreprise}`,
    message: `Un contrat de prestation de services Paramedic (${contractSelected.name}) vient d'etres signer par ${data.body.firstname} ${data.body.name} pour la société ${data.body.entreprise} .
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
        HEADERS,
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
