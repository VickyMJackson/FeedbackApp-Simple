// models/feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  smiley: String // Add the smiley field
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
