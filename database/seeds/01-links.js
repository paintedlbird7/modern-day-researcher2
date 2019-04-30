exports.seed = function(knex, Promise) {
    return knex('links').insert([
      {
        name: 'link',
        link: 'Resource URL: https://github.com/paintedlbird7/modern-day-researcher2',
        // links: 'Resource URL: https://github.com/paintedlbird7/modern-day-researcher2',
        description:'resource'


      },
    ]);
  };


// exports.seed = function(knex, Promise) {
//     // Deletes ALL existing entries
//     return knex('links').truncate()
//       .then(function () {
//         // Inserts seed entries
//         return knex('links').insert([
//           {id: 1, name:'rosa',link:'http',description:'resource'}
//         ]);
//       });
//   };

//changed auth.db3 to links.db3