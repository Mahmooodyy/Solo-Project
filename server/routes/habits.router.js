const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET
router.get('/', rejectUnauthenticated, (req, res) => {
    // what is the value of req.user????
    console.log('req.user.id:', req.user.id);
    const queryText = `SELECT * FROM "habits" ORDER BY "id";`;
    pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error GETing habits:', error);
      res.sendStatus(500);
    });
});

router.get('/', rejectUnauthenticated, (req, res) => {
    // what is the value of req.user????
    console.log('req.user.id:', req.user.id);
    const queryText = `SELECT * FROM "habits" ORDER BY "id";`;
    pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error GETing habits:', error);
      res.sendStatus(500);
    });
});


// POST
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log ('req.body', req.body);
  console.log ('req.body', req.body.habit);
  console.log ('req.params', req.params);
  const newHabit = req.body;
  const queryText = `
      INSERT INTO "habits" ("habit", "description", "user_id")
      VALUES ($1, $2, $3);
      `;
  
  pool.query(queryText, [newHabit.habit, newHabit.description, req.user.id])
  .then((result)=>{
      res.sendStatus(201);
  }).catch((error)=>{
      console.log('AY! error POSTing to db', error);
      res.sendStatus(500)
  })
  console.log(newHabit.habit);
  console.log(newHabit.date);
});

// DELETE
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('This shall be req.params', req.params.id);
  const id = req.params.id
  const user = req.user.id

  console.log('This is the user', user);

  const queryText = 'DELETE FROM "habits" WHERE id = $1;';

  pool.query(queryText, [id])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('something wrong DELETE', error);
      res.sendStatus(500);
    })
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */

router.put('/:id', rejectUnauthenticated, (req, res) => {
  // Update this single student
  const idToUpdate = req.params.id;
  const sqlText = `UPDATE habits SET habit = $1 WHERE id = $2`;
  pool.query(sqlText, [req.body.habit, idToUpdate])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

module.exports = router;

// add the rejectauthenticator 


// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//   // GET route code here
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

// module.exports = router;
