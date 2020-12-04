const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const config = require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true  });

//Import here Schemas that want to save data.
require('./models/Registration');
require('./models/Text');
require('./models/Demand');
require('./models/Estados');
require('./models/Functionality');

app.use(bodyParser.json());

//Import routes that takes the messages in backend to the right route.
require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    // js and css files. Frontend.
    app.use(express.static('client/build'));

    // index.html for all page routes. Beacuse of this, server will know which page to load.
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
 
const PORT = process.env.PORT || 5000;
app.listen(PORT);