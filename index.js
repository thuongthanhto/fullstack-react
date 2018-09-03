const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
