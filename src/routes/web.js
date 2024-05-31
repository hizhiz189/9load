const express = require('express');
const router = express.Router();

const { getEx, getHome } = require('../controllers/homeController.js');


router.get('/', getHome);
router.get('/ex', getEx);

module.exports = router;