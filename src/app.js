/*
name: Dmitrii Mitin,
id: 301255191,
date: June 17, 2024
*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const path = require('path');
const logger = require('morgan');


async function main() {
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Successfully connected to MongoDB.");
}

main().catch(err => console.log(err));

const indexRouter = require('../routes/index');
const productRouter = require('../routes/product.routes');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); 
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use('/', indexRouter);
app.use('/api/products', productRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ message: "error" });
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

module.exports = app;