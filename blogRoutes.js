const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Route to get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
});

// Route to post a new blog
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newBlog = new Blog({ title, content });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error saving blog', error });
  }
});

module.exports = router;
