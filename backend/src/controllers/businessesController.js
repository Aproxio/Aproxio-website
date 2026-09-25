const businesses = require('../data/businesses.json');

exports.getBusinesses = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: businesses.length,
      data: businesses
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
