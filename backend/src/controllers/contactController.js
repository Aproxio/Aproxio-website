// In-memory messages & subscribers store
const inquiries = [];
const subscribers = [];

exports.submitContact = (req, res) => {
  try {
    const { name, email, department, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }
    const inquiry = {
      id: `inq-${Date.now()}`,
      name,
      email,
      department: department || 'General Inquiries',
      subject: subject || 'No Subject',
      message,
      createdAt: new Date().toISOString()
    };
    inquiries.push(inquiry);
    console.log(`[Contact Inquiry Received]`, inquiry);

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out to Aproxio. Your dispatch has been routed to the appropriate department.',
      data: inquiry
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

exports.subscribeNewsletter = (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }
    if (subscribers.includes(email)) {
      return res.status(200).json({ success: true, message: 'You are already subscribed to Aproxio dispatches.' });
    }
    subscribers.push(email);
    console.log(`[New Subscriber]`, email);
    res.status(201).json({
      success: true,
      message: 'Subscribed successfully! You will receive quarterly shareholder letters and group announcements.'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
