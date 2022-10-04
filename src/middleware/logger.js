'use strict';

const express = require('express');
const app = express();

app.get('/hello/:name', logger, (req, res, next) => {

  let { name } = req.params;
  res.status(200).send('success');
});

function logger (req, res, next) {
  console.log(`REQUEST: ${req.method}, ${req.orirginalURL}`);
  next();
}
