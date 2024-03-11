const path = require('path');
const express = require('express');


const configviewengine = (app) => {
    // config template engine 
    app.set('views', './src/views/');

    app.set('view engine', 'ejs');
    //config static file

    app.use(express.static('./src/public'))
}

module.exports = configviewengine;