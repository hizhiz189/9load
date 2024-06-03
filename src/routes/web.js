const express = require('express');
const router = express.Router();

const { getEx, getHome, postCreateDomain } = require('../controllers/homeController.js');

//GET
router.get('/', getHome);
router.get('/ex', getEx);

//POST
router.post('/create-domain', postCreateDomain);

module.exports = router;