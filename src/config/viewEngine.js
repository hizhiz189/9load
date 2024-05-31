const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    app.set('views', './src/views/');
    app.set('view engine', 'ejs');
    console.log(__dirname);
    app.use(express.static(path.join('./src/', 'public')));
}

module.exports = configViewEngine;