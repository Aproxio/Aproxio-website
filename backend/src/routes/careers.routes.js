const express = require('express');
const router = express.Router();
const { getJobs, applyJob } = require('../controllers/careersController');

router.get('/jobs', getJobs);
router.post('/apply', applyJob);

module.exports = router;
