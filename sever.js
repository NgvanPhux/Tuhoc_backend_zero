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
const mysql = require('mysql2');



// config template engine
configviewengine(app);

// khai bao router  
app.use('/ver1', webroute);

//TEST CONNETTION MYSQL
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '121025',
    database: 'webver1',
});

connection.query(
    'SELECT *FROM  ver1 u',
    function (err, results, fields) {
        console.log(">>>>>>>>> results =", results);
        console.log(">>>>>>> fields    =", fields);
    }
);



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});