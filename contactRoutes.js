const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST - create new contact message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({ name, email, message });

  try {
    const saved = await newContact.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit contact form', error });
  }
});

module.exports = router;
