const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // React app is typically served here during development
  methods: ['GET', 'POST']
}));
app.use(bodyParser.json()); // To support JSON-encoded bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/SkilShareU', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);





// Sign Up Route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Sign In Route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Sign in successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const teachSkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  description: { type: String, required: true },
  availability: { type: String, required: true },
});

const TeachSkill = mongoose.model('TeachSkill', teachSkillSchema);

// Add a new route to handle TeachSkill submissions
app.post('/teach-skill', async (req, res) => {
  const { name, skill, description, availability } = req.body;

  try {
    const newSubmission = new TeachSkill({
      name,
      skill,
      description,
      availability,
    });

    await newSubmission.save();
    res.status(201).json({ message: 'Submission successful' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
