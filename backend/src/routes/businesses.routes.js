const express = require('express');
const router = express.Router();
const { getBusinesses } = require('../controllers/businessesController');

router.get('/', getBusinesses);

module.exports = router;
