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
const Links = require('../db-functions');
const db = require('../database/dbConfig.js');


// GET
// gets 200 OK with emtpy array
server.get('/', async(req,res)=>{
  try{
    const links = await db('links')
    res.status(200).json(links);
  }catch(error){
    res.status(500).json(error);
  }





// GET BY ID 
// gets 200 OK with emtpy array
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
// working
server.post('/links', (req, res) => {  
  const link = req.body;
     db('links').insert(link)
      .then(res.status(200).json(link))
      .catch (error => 
      res.status(500).json({ message: message, error })
      );
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
