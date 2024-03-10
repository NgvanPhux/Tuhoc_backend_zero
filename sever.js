const express = require('express');
require('dotenv').config();
// de sd path const path= require('path');
const app = express();
const port = process.env.PORT || 8080;// port   => hardcode ( bien cung khi thay doi phai doi nhieu > can file env)
const hostname = process.env.HOST_NAME;
// config template engine 
app.set('views', './src/views/');
// app.set('views',path.join(__dirname,'view'));
app.set('view engine', 'ejs');
// khai bao router
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/abcd', (req, res) => {
    res.render('sample.ejs')
});
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});