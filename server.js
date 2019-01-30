const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Test route
// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// Passport
app.use(passport.initialize());
require('./config/passport')(passport);



// Routes
app.use('/api/users', users);
app.use('/api/posts', posts)

if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Entering the Matrix ${port}`));

