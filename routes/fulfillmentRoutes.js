const {WebhookClient} = require('dialogflow-fulfillment');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

    });
}