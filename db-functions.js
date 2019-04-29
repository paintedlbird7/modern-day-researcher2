const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};



function find() {
  return db('links');
}

function findById(id) {
  return db('links').where({ id: Number(id) });
}

function insert(link) {
  return db('links')
    .insert(link)
    .then(ids => ({ id: ids[0] }));
}

function update(id, link) {
  return db('links')
    .where('id', Number(id))
    .update(link);
}

function remove(id) {
  return db('links')
    .where('id', Number(id))
    .del();
}





// const knex = require('knex');
// const knexConfig = require('./knexfile');
// const db = knex(knexConfig.development);

// module.exports = {
//   add,
//   find,
//   findBy,
//   findById,
//   findMain
// };

// function find() {
//   return db('links').select('id', 'username', 'password');
// }


// function findBy(filter) {
//   return db('links').where(filter);
// }

// async function add(link) {
//   const [id] = await db('links').insert(link);

//   return findById(id);
// }

// function findById(id) {
//   return db('links')
//     .where({ id })
//     .first();
// }
