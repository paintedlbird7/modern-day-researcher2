require('dotenv').config();

const express = require('express'); // import the express package
// equilalent to import express from 'express'

// const db = require('./data/db.js'); 



require('dotenv').config(); // load .env variables

const server = require('./api/server.js');

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
//