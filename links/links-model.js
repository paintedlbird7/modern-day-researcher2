// const knex = require('knex');
// const knexConfig = require('../knexfile');
// const db = knex(knexConfig.development);

// module.exports = {
//   find,
//   findById,
//   insert,
//   update,
//   remove,
// };



// function find() {
//   return db('links');
// }

// function findById(id) {
//   return db('links').where({ id: Number(id) });
// }

// function insert(link) {
//   return db('links')
//     .insert(link)
//     .then(ids => ({ id: ids[0] }));
// }

// function update(id, link) {
//   return db('links')
//     .where('id', Number(id))
//     .update(link);
// }

// function remove(id) {
//   return db('links')
//     .where('id', Number(id))
//     .del();
// }
