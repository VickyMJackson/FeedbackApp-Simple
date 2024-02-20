const Feedback = require('../model/feedback');

// Create a new feedback
exports.createFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.json({ success: true, message: 'Feedback created successfully', data: newFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating feedback' });
  }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json({ success: true, data: feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching feedback' });
  }
};

// Get a specific feedback by ID
// exports.getFeedbackById = async (req, res) => {
//   try {
//     const feedback = await Feedback.findById(req.params.id);
//     if (!feedback) {
//       return res.status(404).json({ success: false, message: 'Feedback not found' });
//     }
//     res.json({ success: true, data: feedback });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error fetching feedback' });
//   }
// };

// Update a specific feedback by ID
exports.updateFeedbackById = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { name, email, message },
      { new: true }
    );
    if (!updatedFeedback) {
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }
    res.json({ success: true, message: 'Feedback updated successfully', data: updatedFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating feedback' });
  }
};

// Delete a specific feedback by ID
exports.deleteFeedbackById = async (req, res) => {
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!deletedFeedback) {
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }
    res.json({ success: true, message: 'Feedback deleted successfully', data: deletedFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting feedback' });
  }
};

// Get feedback by Email ID
exports.getFeedbackByEmail = async (req, res) => {
    try {
      const feedback = await Feedback.find({email: req.params.email});
      if (feedback.length === 0) {
        return res.status(404).json({ success: false, message: 'Feedback not found' });
      }
    //   if (!feedback) {
    //     return res.status(404).json({ success: false, message: 'Feedback not found' });
    //   }
      res.json({ success: true, data: feedback });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error fetching feedback' });
    }
  };