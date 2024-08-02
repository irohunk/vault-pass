const express = require('express');
const router = express.Router();
const {getWebsiteById, getWebsiteByUserId, deleteWebsiteById, sortByUserByCategories} = require('../db/queries/dashboardHelpers');
const db = require('../db/connection');


router.post('/', (req, res) => {
  const userId = req.cookies.userId;
  console.log('User ID:', userId);

  if (!userId) {
    return res.status(400).send('User not logged in');
  }

  getWebsiteByUserId(userId)
    .then(websites => {
      if (!websites || websites.length === 0) {
        console.log('No websites found for user:', userId);
        websites = [];
      } else {
        console.log('Websites:', websites);
      }
      res.render('index', { website: websites, user: null });
    })
    .catch(error => {
      console.error('Error fetching websites:', error);
      res.status(500).send('Server error');
    });
});

router.post('/:id/delete', (req, res) => {
  const websiteId = req.params.id;

  deleteWebsiteById(websiteId)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.error('Error deleting website:', error);
      res.status(500).send('Server Error');
    });
});

router.get('/', (req, res) => {
  const userId = req.cookies.userId;
  const category = req.query.category || null;

  if (!userId) {
    return res.status(400).send('User not logged in');
  }

  db.query('SELECT DISTINCT category FROM websites WHERE user_id = $1', [userId])
    .then(categoriesData => {
      const categories = categoriesData.rows.map(cat => cat.category);

      sortByUserByCategories(userId, category)
        .then(websites => {
          res.render('index', {website: websites, categories: categories, user: null});
        })
        .catch(error => {
          console.log('Error fetching websites:', error);
          res.status(500).send('Server error');
        });
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
      res.status(500).send('Server error');
    });
});



module.exports = router;
