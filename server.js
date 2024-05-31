require('dotenv').config();
const express = require('express');
const configViewEngine = require('./src/config/ViewEngine.js');
const webRouter = require('./src/routes/web.js');


const app = express();
const port = 1989;


configViewEngine(app);
app.use('', webRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 