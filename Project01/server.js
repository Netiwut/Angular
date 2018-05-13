const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('@angular/router');
const mongoose = require('mongoose');


const config = require('./server/db.js');
const Route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use('/api', Route);


mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});


const server = app.listen(3000,function () {
    const port = server.address().port ;
    console.log('Server is running... To Port : ',port);
});

