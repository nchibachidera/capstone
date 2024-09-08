
import express from 'express';
const router = express.Router();
const posts = [];

router.get('/', (req, res) => {
  res.render('index', { posts });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res, callback) => {
  const post = { title: req.body.title, content: req.body.content };
  posts.push(post);
  callback(); // Call the callback function
  res.redirect('/');
}, (err) => { // Callback function to handle errors
  console.error(err);
});

router.get('/edit/:id', (req, res, next) => {
  const id = (unavailable); // Use (link unavailable) to get the id
  const post = posts.find(p => p._id === id);
  if (post) {
    res.render('edit', { post });
  } else {
    next(new Error("Post not found"));
  }
});

router.post('/edit/:id', (req, res, next, callback) => {
  const id = (unavailable); // Use (link unavailable) to get the id
  const post = posts.find(p => p._id === id);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    callback(); // Call the callback function
    res.redirect('/');
  } else {
    next(new Error("Post not found"));
  }
}, (err) => { // Callback function to handle errors
  console.error(err);
});

router.get('/delete/:id', (req, res, next) => {
  const id = (unavailable); // Use (link unavailable) to get the id
  const index = posts.findIndex(p => p._id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    res.redirect('/');
  } else {
    next(new Error("Post not found"));
  }
});

export default router;