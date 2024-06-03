const path = require('path')
require('dotenv').config()

const express = require('express');
const configViewEngine = require('./src/config/ViewEngine.js');
const connection = require('./src/config/database.js');
const webRouter = require('./src/routes/web.js');


const app = express();
const port = process.env.PORT || 1990;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


configViewEngine(app);
app.use('', webRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 