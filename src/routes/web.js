const express = require('express');
const router = express.Router();

const { getEx, getHome, postCreateDomain, getListDomain } = require('../controllers/homeController.js');

//GET
router.get('/', getHome);
router.get('/ex', getEx);
router.get('/list-domain', getListDomain);

//getListDomain
router.post('/create-domain', postCreateDomain);

module.exports = router;