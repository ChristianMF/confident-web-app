'use strict';

const chatbot = require('../chatbot/chatbot');

module.exports = app => {

    //Display of message only in development.
    /*app.get('/', async (req, res) => {
        res.send({'hello': 'Johny'})
    });*/
    
    app.post('/api/df_text_query', async (req, res) => {
        let responses = await chatbot.textQuery(req.body.text, req.body.userID, req.body.parameters);
        res.send(responses[0].queryResult);
    });

    app.post('/api/df_event_query', async (req, res) => {
        let responses = await chatbot.eventQuery(req.body.event, req.body.userID, req.body.parameters);
        res.send(responses[0].queryResult);
    });

}