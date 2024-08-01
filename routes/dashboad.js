const express = require('express');
const router = express.Router();
const {getWebsiteById, getWebsiteByUserId, deleteWebsiteById} = require('../db/queries/dashboardHelpers');


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
})

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
router.get('/', (req, res) => {
  const userId = req.cookies.userId;
  console.log('User ID:', userId); // Log the user ID to ensure it's set

  if (!userId) {
    return res.status(400).send('User not logged in');
  }

  getWebsiteByUserId(userId)
    .then(websites => {
      console.log('Websites:', websites); // Log the data to see what’s being passed
      res.render('index', { website: websites, user: null });
    })
    .catch(error => {
      console.error('Error fetching websites:', error);
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