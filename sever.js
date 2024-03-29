const express = require('express');
require('dotenv').config();
// de sd path const path= require('path');
const configviewengine = require('./src/config/viewengine');
const app = express();
const port = process.env.PORT || 8080;// port   => hardcode ( bien cung khi thay doi phai doi nhieu > can file env)
const hostname = process.env.HOST_NAME;
const path = require('path');
const { config } = require('process');
const router = require('./src/route/web');
const webroute = require('./src/route/web');
const connection = require('./src/config/database')
//config req. body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data


// config template engine
configviewengine(app);

// khai bao router  
app.use('/', webroute);






app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});