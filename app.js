import express from 'express';
const ejs = import('ejs');
const posts = (await import('./routs/posts.mjs')).default;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get('/', posts.getAllPosts);
app.get('/create', posts.createPost);
app.post('/create', posts.createPostHandler);
app.get('/edits/:id', posts.getPostById);
app.post('/edit/:id', posts.updatePostHandler);
app.get('/delete/:id', posts.deletePostHandler);

app.listen(3000, () => {
    console.log('server running on port 3000');
});