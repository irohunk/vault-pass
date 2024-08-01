const express = require('express');
const router = express.Router();
const helpers = require('../db/queries/helpers');

// CREATES NEW PAGE FOR CREATION OF NEW WEBSITE, USERNAME AND PASSWORD



// Get route for create new vault pass
router.get('/', (req, res) => {
  // use helper functions to get pass by ID
  helpers.getPasswordByUserId()
    .then(vaultPasses => {
      res.render('new', { vaultPasses: vaultPasses, user: res.locals.user });
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
  console.log(req.body);
  const user_id = 1;
  const org_id = 1;

  helpers.addNewVaultPass(user_id, org_id, url, username, password)
    .then(newVaultPass => {
      res.json({message: 'vaultPass created!', newVaultPass});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id/edit', (req, res) => {
  const passId = req.params.id;
  helpers.getPasswordById(passId)
    .then(existingPassword => {
      console.log('existing password', existingPassword);
      res.render('edit-pass', {existingPassword, user:null});

    });
});

router.post('/:id/edit', (req, res) => {
  const editId = req.params.id;
  const {url, username, password } = req.body;
  console.log(req.body);


  helpers.editVaultPass(url, username, password, editId)
    .then(newVaultPass => {
      res.json({message: 'vaultPass edited!', newVaultPass});
    })
    .catch(err => {
      console.log(err);
      res
        .status(205)
        .json({ error: err.message });
    });
});
module.exports = router;

router.post('/:id/edit', (req, res) => {
  const editId = req.params.id;
  const {url, username, password } = req.body;
  console.log(req.body);


  helpers.editVaultPass(url, username, password, editId)
    .then(newVaultPass => {
      res.json({message: 'vaultPass edited!', newVaultPass});
    })
    .catch(err => {
      console.log(err);
      res
        .status(205)
        .json({ error: err.message });
    });
});
module.exports = router;
