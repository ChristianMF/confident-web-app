const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const Demand = mongoose.model('demand');
const Estados= mongoose.model('estados');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        //Insert the function which will add info. Those that have fulfiilment from db, should be async.

        function fallback(agent) {
            agent.add(`No comprendi`);
            agent.add(`Lo puedes repetir`);
        }

        async function estado(agent) {
            Demand.findOne({'estado' /*intent*/: agent.parameters.estado /*entity or parameter*/}, function(err, estado) {
                //Reister in db.
                if (estado != null) {
                    estado.counter++;
                    estado.save()
                } else {
                    const demand = new Demand({estado: agent.parameters.estado})
                    demand.save();
                }
            });

            //Look if we have the register in db

            //If not
            let responseText = `${agent.parameters.estado}.
                No lo tenemos.`;

            //If yes
            let estados = await Estados.findOne({'estado': agent.parameters.estado});
            if(estados !== null) {
                responseText = `${agent.parameters.estado}.
                Aquí hay más información ${estados.link}
                Una descripción ${estados.description}`;
            }

            agent.add(responseText)
        }

        //

        let intentMap = new Map();

        //Describe which intent will match which function.

        intentMap.set('Default Fallback Intent', fallback);

        intentMap.set('estado', estado);

        agent.handleRequest(intentMap);
    });
}