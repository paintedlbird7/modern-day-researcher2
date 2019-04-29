const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(knex());
configureRoutes(server);
const knex = require('knex');
const morgan = require('morgan');
// const bcrypt = require('bcrypt');
server.use(morgan());
// const knexConfig = require('./knexfile.js');
// const db = knex(knexConfig.development);


// GET 

server.get('/links', async (req, res) => {
    try {
      const links = await Links.find(req.query);
      res.status(200).json(links);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the links',
      });
    }
  });


// GET BY ID 

server.get('/links/:id', async (req, res) => {
    try {
      const link = await Links.findById(req.params.id);
  
      if (link) {
        res.status(200).json(link);
      } else {
        res.status(404).json({ message: 'Link not found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the link',
      });
    }
  });



// POST

server.post("/links", async (req, res) => {
        console.log("link", req.body);
        try {
          const linkData = req.body;
          const linkId = await Links.insert(linkData);
          const link = await Links.findById(linkId.id);
          res.status(201).json(link);
        } catch (error) {
          let message = "There was an error while saving the link to the database";
      
          if (error.errno === 19) {
            message = "please provide both the name and the link";
          }
          res.status(500).json({ message: message, error });
        }
      });



  

// DELTETE

server.delete('/:id', async (req, res) => {
        try {
          const count = await Links.remove(req.params.id);
          if (count > 0) {
            res.status(200).json({ message: 'The link has been nuked' });
          } else {
            res.status(404).json({ message: 'The link could not be found' });
          }
        } catch (error) {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error removing the link',
          });
        }
      });
      
    
// PUT / UPDATE

server.put('/:id', async (req, res) => {
    try {
      const link = await Links.update(req.params.id, req.body);
      if (link) {
        res.status(200).json(link);
      } else {
        res.status(404).json({ message: 'The link could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the link',
      });
    }
  });  


module.exports = server;
