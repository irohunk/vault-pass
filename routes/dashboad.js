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
  
  // const categoriy = req.body.category || null;
  
  // sortByUserByCategories(userId, category)
  // .then(websites => {
  //   res.render('index', { website: websites, user: null });
  // })
  // .catch(error => {
  //   console.error('Error fetching websites:', error);
  //   res.status(500).send('Server error');
  // });

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

// route to get websites for a specific user and to throw it onto the main page
// router.get('/', (req, res) => {
//   const userId = req.cookies.userId;
//   console.log('User ID:', userId); // Log the user ID to ensure it's set

//   if (!userId) {
//     return res.status(400).send('User not logged in');
//   }

//   getWebsiteByUserId(userId)
//     .then(websites => {
//       console.log('Websites:', websites); // Log the data to see what’s being passed
//       res.render('index', { website: websites, user: null });
//     })
//     .catch(error => {
//       console.error('Error fetching websites:', error);
//       res.status(500).send('Server error');
//     });
// });

router.get('/', (req, res) => {
  const userId = req.cookies.userId;
  const category = req.query.category || null;
  console.log("HEEEEEY OLA HI! -=-----------------------------------!!!");

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

//router.post("/websites/:id/delete", (req, res) => {
//  const userId = req.session.userId;
//  const urlToDelete = req.params.id;
//  const urlEntry = urlDatabase[urlToDelete];
//
//  // Check if the user is logged in
//  if (!userId) {
//    return res.status(403).send("Please log in to delete URLs.");
//  }
//
//  // Check if the URL exists
//  if (!websiteEntry) {
//    return res.status(404).send("URL not found.");
//  }
//
//  // Check if the current user owns the URL
//  if (websiteEntry.userId !== userId) {
//    return res.status(403).send("You do not have permission to delete this URL.");
//  }
//
//  // Delete the URL entry
//  delete websites[urlToDelete];
//
//  // Redirect to URLs list after deletion
//  res.redirect('/website');
//})

module.exports = router;