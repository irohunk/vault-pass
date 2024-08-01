const express = require('express');
const router = express.Router();
const helpers = require('../db/queries/helpers');

// CREATES NEW PAGE FOR EDITING OF URL, USERNAME AND PASSWORD

router.get('/:id/edit', (req, res) => {
  const passId = req.params.id;
  const categories = ['Social', 'Work-related', 'Entertainment'];
  helpers.getPasswordById(passId)
    .then(existingPassword => {
      console.log('existing password', existingPassword);
      res.render('edit-pass', {existingPassword, user:null, categories});
    });
});

router.post('/:id/edit', (req, res) => {
  const editId = req.params.id;
  const { category, url, username, password } = req.body;
  console.log(req.body);

  helpers.editVaultPass(url, username, password, category, editId)
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
