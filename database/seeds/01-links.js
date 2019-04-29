exports.seed = function(knex, Promise) {
    return knex('links').insert([
      {
        name: 'link',
        link: 'Resource URL: https://github.com/paintedlbird7/modern-day-researcher2',

      },
    ]);
  };

//changed auth.db3 to links.db3