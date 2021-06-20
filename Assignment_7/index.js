const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const blogRoutes = require('./routes/blog-routes');
const HttpError = require('./error/errors');

const port = 3001;
app.use(bodyParser.json());

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Role');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
})

// Routing
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);

app.use((req,res,next) => {
  const error = new HttpError('Page is not found',404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.json({message: error.message || 'An unknown error has occured' , code: error.code });
});

app.get('/about', (req, res) => {
  res.send(JSON.stringify({page: "About", message: "This is the about page"}));
});

app.post('/login',(req, res) => {
  res.send({page: "Login", message: "Please submit your details"});
});

mongoose.connect('connection string',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`)
    });
  }).catch(err => {
    console.log(err);
  });