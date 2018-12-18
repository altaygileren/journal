const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/Post');

const validatePostInput = require('../../validation/post');

// @route GET api/posts/test
// @desc Tests posts route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Posts works' }));


// @route GET api/posts/test
// @desc Tests posts route
// @access Public
router.get('/all', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json({ nopostfound: 'No posts found' }))
});


// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.json(post)
      } else {
        res.status(404).json({ nopostfound: 'No post found wit that ID' })
      }
    })
    .catch(err => res.status(400).json({ nopostfound: 'No post found with that ID' }))
});


// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    headline: req.body.headline,
    body: req.body.body,
    user: req.user.id
  });

  newPost.save().then(post => res.json(post));
});


// @route   DELETE api/posts/:id
// @desc    DELETE post
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findOne({ user: req.user.id })
    .then(user => {
      Post.findById(req.params.id)
        .then(post => {
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ notauthorized: 'You are not authorized to delete' });
          }

          post.remove()
            .then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
    })
})




module.exports = router;