// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require('dotenv').config()
const handler = async(event) => {
    try {
        const subject = event.queryStringParameters.name || 'World'
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Hello ${subject}` }),
            // // more keys you can return:
            // headers: { "headerName": "headerValue", ... },
            // isBase64Encoded: true,
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }


const { MG_API_KEY, MG_DOMAIN, MG_HOST, TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MG_API_KEY, domain: MG_DOMAIN, url: MG_HOST })

exports.handler = async(event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: { 'Allow': 'POST' }
        }
    }

    const data = JSON.parse(event.body)

    if (!data.message || !data.name || !data.email) {
        return { statusCode: 422, body: 'Name, email, and message are required.' }
    }

    const mailgunData = {
        from: data.email,
        to: TO_EMAIL_ADDRESS,
        'h:Reply-To': data.email,
        subject: `New mail from ${data.name}`,
        html: `
    <h4> Email from ${data.name} ${data.email} </h4>
    <p> ${data.message}</p>
    `
    }

    try {
        await mailgun.messages().send(mailgunData)

        return {
            statusCode: 200,
            body: 'Your message was sent successfully!'
        }
    } catch (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    }
}