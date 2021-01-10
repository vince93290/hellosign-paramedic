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
  console.log(data)

  return axios
    .get(
      `https://api.eversign.com/api/download_final_document?access_key=3b6f67e4b8b3cd90a03fbfcb7dd4eeba&business_id=253385&document_hash=${data.body.documentHash}&url_only=1`
    )
    .then(res => {
      console.log('sended:', res)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(res)
      }
    })
    .catch(err => {
      // console.log("not send", err);
    })

  // console.log(url)
}
