const express = require('express');
const router = express.Router();
const { getImpactData } = require('../controllers/impactController');

router.get('/', getImpactData);

module.exports = router;
