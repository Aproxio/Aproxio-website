const impactData = require('../data/impact.json');

exports.getImpactData = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: impactData
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
