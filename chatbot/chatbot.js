'use strict'
const dialogflow = require('dialogflow');
const structjson = require('./structjson');
const config = require('../config/keys');
const mongoose = require('mongoose');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
//const sessionPath = sessionClient.sessionPath(projectId, sessionId);}

//Import Schema that want to save data.
const Registration = mongoose.model('registration');
const Textt = mongoose.model('text');

module.exports = {
    textQuery: async function(text, userID, parameters = {}) {
        let sessionPath = sessionClient.sessionPath(projectId,sessionId + userID);
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: text,
                    // The language used by the client
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        self.saveText(userID, text);
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    }, 

    eventQuery: async function(event, userID, parameters = {}) {
        let self = module.exports;
        let sessionPath = sessionClient.sessionPath(projectId, sessionId + userID);
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    // The query to send to the dialogflow agent
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters),
                    // The language used by the client
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    }, 

    findCoordinates: () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
    
            this.setState({ location });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      },

    handleAction: function(responses) {
        let self = module.exports;
        let queryResult = responses[0].queryResult;

        //When a intent asks for data about the user, the action(Dialogflow) & schema(Mongo) is set here, in order to save to db.
        //If want to creat a new schema, please first register it in folder "models", then import it here.
        switch(queryResult.action) {
            case 'darDatos':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveRegistration(queryResult.parameters.fields);
                }
                break;
        }
        
        return responses;
    },

    //Create methods that allow Schemas in "models" to save data.
    //1
    saveRegistration: async function(fields) {
        const registration = new Registration({
            name: fields.name.structValue.fields.name.stringValue,
            city: fields.city.stringValue,
            email: fields.email.stringValue,
            registerDate: Date.now()
        });
        try {
            let reg = await registration.save();
            console.log(reg);
        } catch (err){
            console.log(err);
        }
    },
    //2
    saveText: async function(userID, text) {
        const textt = new Textt({
            id_user: userID,
            text: text,
            date: Date.now()
        });
        try {
            let tex = await textt.save();
            console.log(tex);
        } catch (err){
            console.log(err);
        }
    }

}