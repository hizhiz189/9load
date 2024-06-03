const express = require('express');
const connection = require('../config/database.js');

const getEx = (req, res) => {
    res.render('index');
}

const getHome = (req, res) => {
    res.send('Home');
}

const getListDomain = async (req, res) => {
    let [results, fields] = await connection.query('select * from test');
    res.render('list-domain.ejs', { data: results });
}

const postCreateDomain = async (req, res) => {
    let { site, time_domain_renew } = req.body;
    let [results, fields] = await connection.query(
        `insert into test(name, name2) values(?,?)`, [site, time_domain_renew],
        function (err, results) {
            console.log(results);

        }
    )
    res.send('Create User Success');
}

module.exports = {
    getEx,
    getHome,
    postCreateDomain,
    getListDomain
};