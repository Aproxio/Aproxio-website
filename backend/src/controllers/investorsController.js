const reports = require('../data/reports.json');

exports.getReports = (req, res) => {
  try {
    const { category } = req.query;
    let filtered = reports;
    if (category && category !== 'all') {
      filtered = reports.filter(r => r.category.toLowerCase() === category.toLowerCase());
    }
    res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
