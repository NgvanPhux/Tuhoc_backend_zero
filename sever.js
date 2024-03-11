const express = require('express');
require('dotenv').config();
// de sd path const path= require('path');
const configviewengine = require('./src/config/viewengine');
const app = express();
const port = process.env.PORT || 8080;// port   => hardcode ( bien cung khi thay doi phai doi nhieu > can file env)
const hostname = process.env.HOST_NAME;
const path = require('path');
const { config } = require('process');


configviewengine(app);




// khai bao router  
app.get('/', (req, res) => {
    res.send('Hello World!  dsdsaadsads')
});

app.get('/abcd', (req, res) => {
    res.render('sample.ejs')
});
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});