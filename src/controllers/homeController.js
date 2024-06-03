const express = require('express');
const connection = require('../config/database.js');

const getEx = (req, res) => {
    res.render('index');
}

const getHome = (req, res) => {
    res.send('Home');
}

const postCreateDomain = (req, res) => {
    console.log(req.body);
    res.send('create domain');
}

module.exports = {
    getEx,
    getHome,
    postCreateDomain
};