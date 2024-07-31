const express = require('express');
const router = express.Router();
const helpers = require('../db/queries/helpers');

// CREATES NEW PAGE FOR CREATION OF NEW WEBSITE, USERNAME AND PASSWORD



// Get route for create new vault pass
router.get('/', (req, res) => {
  // use helper functions to get pass by ID
  helpers.getPasswordByUserId()
    .then(vaultPasses => {
      res.render('vaultPasses', { vaultPasses: vaultPasses, user: res.locals.user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// POST route to create new vault pass
router.post('/', (req, res) => {
  const {url, username, password } = req.body;
  const user_id = res.locals.user.id;

  helpers.addNewVaultPass(user_id, org_id, url, username, password)
    .then(newVaultPass => {
      res.json;
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
