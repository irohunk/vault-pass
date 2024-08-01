// - for each table, need routes for read, write, update, delete CRUD
// - FIGURE OUT WHICH ENDPOINTS ARE NEEDED.
// - actions will lead directly to helper functions

const express = require("express");
const bodyParser = require('body-parser');
const router = express();
const cookieSession = require('cookie-session');

const PORT = 8080; // default port 8080
const bcrypt = require("bcryptjs");

const { users } = require("./data/userData");
const router = require("./widgets-api");

app.use(express.urlencoded({ extended: true }));

// Protecting the routes
const authenticate = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
};


// Update/Edit
router.get("/website/:id/edit", (req, res) => {
  const userId = req.session.userId;;
  const user = users[userId];
  const id = req.params.id;

  // Check if the user is logged in
  // if (!userId) {
  //   return res.status(403).send("Please log in to view this URL.");
  // }

  // // Check if the URL exists
  // const websiteEntry = websites[id];
  // if (!websiteEntry) {
  //   return res.status(404).send("URL not found.");
  // }

  // // Check if the current user owns the URL
  // if (websiteEntry.userId !== userId) {
  //   return res.status(403).send("You do not have permission to view this URL.");
  // }

  const templateVars = {
    url: websiteEntry.url,
    user,
    id,
    username,
    password
  }

  res.render('website', templateVars);
})


router.post("/website/:id/edit", (req, res) => {
  const userId = req.session.userId;
  const id = req.params.id;
  const url = req.body.url;
  const selectedCategory = req.body.category;
  const formData = req.body; // to use for submit button
  const cancelData = req.body; // to use for cancel button

  // Check if the user is logged in
  if (!userId) {
    return res.status(403).send("Please log in to edit this URL.");
  }

  // Check if the URL exists
  const websiteEntry = websites[id];
  if (!websiteEntry) {
    return res.status(404).send("URL not found.");
  }

  // Check if the current user owns the URL
  if (websiteEntry.id !== userId) {
    return res.status(403).send("You do not have permission to edit this URL.");
  }


  // Update the db fields
  websites[id].category = selectedCategory;
  websites[id].url = newUrl;
  websites[id].username = newUsername;
  websites[id].password = newPassword;

  res.redirect('/website');
})

