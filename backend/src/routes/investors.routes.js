const express = require('express');
const router = express.Router();
const { getReports } = require('../controllers/investorsController');

router.get('/reports', getReports);

module.exports = router;
