// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController');

// Create a new feedback
router.post('/feedback', feedbackController.createFeedback);

// Get all feedback
router.get('/feedback', feedbackController.getAllFeedback);

// Get a specific feedback by ID
// router.get('/feedback/:id', feedbackController.getFeedbackById);

// Update a specific feedback by ID
router.put('/feedback/:id', feedbackController.updateFeedbackById);

// Delete a specific feedback by ID
router.delete('/feedback/:id', feedbackController.deleteFeedbackById);

// Get a specific feedback by Email
router.get('/feedback/:email', feedbackController.getFeedbackByEmail);

module.exports = router;
