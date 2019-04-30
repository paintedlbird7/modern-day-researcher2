 exports.up = function(knex, Promise) {
    return knex.schema.createTable('links', function(tbl) {
    
    tbl.increments()
    // tbl.boolean('completed');
    tbl.string('link');
    tbl.string('description');
    tbl.string('name')
    .notNullable();



    // tbl.integer('user_id')
    // .unsigned()
    // .references('id')
    // .inTable('user-info-links')
    // .onDelete('CASCADE')
    // .onUpdate('CASCADE');
    
    // tbl.integer('user_id')
    // .notNullable()
    // .references('id')
    // .inTable('users');
    
    
//     tbl.string('link')
//     .notNullable();
    
//     tbl.string('category')
//     .notNullable();

//     tbl.string('created')
//     .notNullable();
    
//     tbl
//     .string('title',128)
//     .notNullable()
//     .unique()
    })
  }

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableifExists('links')
  };
