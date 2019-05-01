
# Modern Day Researcher

## Dependencies

"dependencies": {
    "axios": "^0.18.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0",
    "express": "^4.16.4",
    "helmet": "^3.16.0",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.16.5",
    "sqlite3": "^4.0.6"
  },
  "devDependencies": {
    "nodemon": "^1.18.11"
  }
}


### Database access

Access the data with `db-functions.js` file included inside the `root` folder with methods:

  find,
  findById,
  insert,
  update,
  remove,

- `find()`: calling find returns a promise that returns an array of all the links.

- `findById()`: finds and returns the link with a specific `id`.

- `insert()`: adds the link to the database and return an object with the `id` of the inserted link `{ id: 1 }`.

- `update()`: updates the database according to the `id` that you want to edit. 
//It returns the count of updated records. If the count is 1 it means the record was updated correctly.

- `remove()`: deletes the link with a specific `id` from the database 
//it returns the number of records deleted.


### Link Schema
```js
     {
        name: 'Rosa's Link', // String, required
        link: 'Resource URL: https://github.com/paintedlbird7/modern-day-researcher2', // String
        description:'resource' // String
      },
```





### Write endpoints to perform the following queries.

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /post/links     | Creates a link using the information sent inside the `request body`.                                                              |
| GET    | /links     | Returns all the link objects contained in the database in an array.                                                               |
| GET    | /links/:id | Returns the link object with the specified `id`.                                                                                  |
| DELETE | /links/:id | Removes the link with the specified `id` and returns the deleted link.                                                            |
| PUT    | /links/:id | Updates the link with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**. |


**Bold _italic_ bold.**


Build Week work reflects our proficiency with building a funtional api database for a group project:  including CRUD methods and Authentication and our command of the concepts and techniques in the Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication modules.
// add other topics

## User Login/Register

## Endpoints

/api/register
/api/login

In this challenge, you build a application. _Modern Day Researcher_ are all the rage these days. Currently the application is trying to receive some `Links`, however we are currently locked out.

Implement an User Authentication System in order to access the links from the Links API that we want to consume. My system uses `bcrypt` for hashing and encrypting your user's passwords, as well as JWT for handling the authorization aspect of the app.
