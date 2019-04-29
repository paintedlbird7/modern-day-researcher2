const axios = require('axios');

const db = require("../database/dbConfig.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const { authenticate, generateToken } = require('../config/middleware.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/links', authenticate, 
  getLinks
  );
};

function register(req, res) {
  // implement user registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  db('users')
  .insert(user)
    .then(ids => {
              const id = ids[0];
      res.status(201).json({ userId: id });
    })
    .catch(error => {
      res.status(500).json(error);
    });
}


function login(req, res) {
  // implement user login
  let { username, password } = req.body;
    
  db("users")
//   Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        // the server needs to return the token to the client
        // this doesn't happen automatically like it happens with cookies
        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}


function getLinks(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error fetching inks', error: err });
    });
}
