// const express = require('express');

// const Links = require('./links-model');

// const router = express.Router();




// router.get('/links', async (req, res) => {
//     try {
//       const links = await Links.find(req.query);
//       res.status(200).json(links);
//     } catch (error) {
//       // log error to database
//       console.log(error);
//       res.status(500).json({
//         message: 'Error retrieving the links',
//       });
//     }
//   });




//   router.get('/:id', async (req, res) => {
//     try {
//       const link = await Links.findById(req.params.id);
  
//       if (link) {
//         res.status(200).json(link);
//       } else {
//         res.status(404).json({ message: 'Link not found' });
//       }
//     } catch (error) {
//       // log error to database
//       console.log(error);
//       res.status(500).json({
//         message: 'Error retrieving the link',
//       });
//     }
//   });


  
//   router.get('/:id/links', async (req, res) => {
//     try {
//       const links = await Links.findLinkLinks(req.params.id);
  
//       if (links.length > 0) {
//         res.status(200).json(links);
//       } else {
//         res.status(404).json({ message: 'No links for this link' });
//       }
//     } catch (error) {
//       // log error to database
//       console.log(error);
//       res.status(500).json({
//         message: 'Error retrieving the links for this link',
//       });
//     }
//   });
  
//     //Share links
//   // router.get('/:id/actions', async (req, res) => {
//   //   try {
//   //     const links = await Links.find(req.query);
//   //     res.status(200).json(links);
//   //   } catch (error) {
//   //     // log error to database
//   //     console.log(error);
//   //     res.status(500).json({
//   //       message: 'Error retrieving the links',
//   //     });
//   //   }
//   // });
  


//   router.delete('/:id', async (req, res) => {
//     try {
//       const count = await Links.remove(req.params.id);
//       if (count > 0) {
//         res.status(200).json({ message: 'The link has been nuked' });
//       } else {
//         res.status(404).json({ message: 'The link could not be found' });
//       }
//     } catch (error) {
//       // log error to database
//       console.log(error);
//       res.status(500).json({
//         message: 'Error removing the link',
//       });
//     }
//   });
  


//   router.put('/:id', async (req, res) => {
//     try {
//       const link = await Links.update(req.params.id, req.body);
//       if (link) {
//         res.status(200).json(link);
//       } else {
//         res.status(404).json({ message: 'The link could not be found' });
//       }
//     } catch (error) {
//       // log error to database
//       console.log(error);
//       res.status(500).json({
//         message: 'Error updating the link',
//       });
//     }
//   });
  

//   router.post("/", async (req, res) => {
//     console.log("link", req.body);
//     try {
//       const linkData = req.body;
//       const linkId = await Links.insert(linkData);
//       const link = await Links.findById(linkId.id);
//       res.status(201).json(link);
//     } catch (error) {
//       let message = "There was an error while saving the link to the database";
  
//       if (error.errno === 19) {
//         message = "please provide both the name and the description";
//       }
//       res.status(500).json({ message: message, error });
//     }
//   });

        



// module.exports = router;