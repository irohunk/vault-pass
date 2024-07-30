/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const helpers = require('../db/queries/helpers');

router.get('/', (req, res) => {
  // const hardCodedUsers = [
  //   {name: 'Saul Hudson', website: 'slash.com', password: 'password'},
  //   {name: 'Axl Rose',    website: 'alx.com',   password: 'password'},
  //   {name: 'Saul Hudson', website: 'slash.com', password: 'password'}
  // ];
  helpers.getPasswordByUserId(5).then(users => {
    res.json(users);
  });// call res.render when ready
});


module.exports = router;
