const jobs = require('../data/jobs.json');

// In-memory applications store
const applications = [];

exports.getJobs = (req, res) => {
  try {
    const { department } = req.query;
    let filteredJobs = jobs;
    if (department && department !== 'all') {
      filteredJobs = jobs.filter(j => j.department.toLowerCase() === department.toLowerCase());
    }
    res.status(200).json({
      success: true,
      count: filteredJobs.length,
      data: filteredJobs
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

exports.applyJob = (req, res) => {
  try {
    const { jobId, name, email, phone, resumeLink, note } = req.body;
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }
    const application = {
      id: `app-${Date.now()}`,
      jobId: jobId || 'general',
      name,
      email,
      phone: phone || '',
      resumeLink: resumeLink || '',
      note: note || '',
      appliedAt: new Date().toISOString()
    };
    applications.push(application);
    console.log(`[Job Application Received]`, application);
    res.status(201).json({
      success: true,
      message: 'Application received successfully! Our talent team will review your profile.',
      data: application
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
