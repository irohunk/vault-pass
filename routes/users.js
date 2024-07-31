/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const helpers = require('../db/queries/helpers');
const sequelize = require('sequelize');

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

// const Vault = sequelize.define('Vault', {
//   websiteUrl: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

router.get('/websites', async (req, res) => {
  const vaults = await Vault.findAll();
  res.render('websites', { vaults });
});

router.post('/websites', async (req, res) => {
  const { websiteUrl, username, password } = req.body;
  await Vault.create({ websiteUrl, username, password });
  res.redirect('/websites');
});


module.exports = router;
