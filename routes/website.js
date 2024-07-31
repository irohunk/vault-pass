const express = require('express');
const router = express.Router();
const helpers = require('../db/queries/helpers');

router.post('/', (req, res) => {
  const { user_id, org_id, url, username, password } = req.body;
  helpers.addNewVaultPass(user_id, org_id, url, username, password).then(users => {
    // res.json(users);
    res.redirect('/vaultPasses');
  });
});

module.exports = router;
