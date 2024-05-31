require('dotenv').config();
const express = require('express')
const app = express();
const port = 1989;
const path = require('path');
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ex', (req, res) => {
    res.render('index');
})

//config template engine
app.set('views', './src/views/');
app.set('view engine', 'ejs');

//config static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 