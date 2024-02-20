const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const PORT = 7009;


app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (make sure
mongoose.connect('mongodb+srv://UserLogin:UserLogin@cluster0.zeroe3h.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Use feedback routes
app.use('/api', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
