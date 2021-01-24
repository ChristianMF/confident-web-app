const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
//const Demand = mongoose.model('demand');
//const Estados= mongoose.model('estados');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });
// FOR FULFILLMENT
        //Insert the function which will add info. Those that have fulfiilment from db, should be async.

        //1
        //function fallback(agent) {
            //agent.add(`No comprendi`);
            //agent.add(`Lo puedes repetir`);
        //}

        //2
        //async function estado(agent) {
            //Save in a db
            //Demand/*model name*/.findOne({'estado': agent.parameters.estado/*entity or parameter*/}, function(err, estado/*function name*/) {
                //Register in db.
                //if (estado != null) {
                    //estado.counter++;
                    //estado.save()
                //} else {
                    //const demand = new Demand({estado: agent.parameters.estado})
                    //demand.save();
                //}
            //});
            //Look if we have the record in db
            //If not
            //let responseText = `${agent.parameters.estado}.
                //No lo tenemos.`;
            //If yes
            //let estados = await Estados/*model name*/.findOne({'estado': agent.parameters.estado/*entity or parameter*/});
            //if(estados !== null) {
                //responseText = `${agent.parameters.estado}.
                //Aquí hay más información ${estados.link}
                //Una descripción ${estados.description}`;
            //}

            //agent.add(responseText)
        //}

        //

        //let intentMap = new Map();

        //Describe which intent will match which function.
        //intentMap.set('Default Fallback Intent', fallback);
        //intentMap.set('estado', estado);

        //agent.handleRequest(intentMap);
    });
}