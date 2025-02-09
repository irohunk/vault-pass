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
  helpers.getPasswordByUserId(5).then(users => {
    res.json(users);
  });
});

router.get('/websites', async(req, res) => {
  const vaults = await Vault.findAll();
  res.render('websites', { vaults });
});

router.post('/websites', async(req, res) => {
  const { websiteUrl, username, password } = req.body;
  await Vault.create({ websiteUrl, username, password });
  res.redirect('/websites');
});


module.exports = router;
