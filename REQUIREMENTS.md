## THINGS TO DO

## Requirements:

  - user can be assigned to an organization --- DONE
  - an organization has many users --- DONE
  - user can add a new username and password for a specific website
  - app can generate passwords based on the criteria specified (password length, contains lowercase, contairs uppercase, contains numbers, etc)
  - user can edit and change their password any time
  - user has a convinient copy to clipboard button so they dont have to select the password
  - sites can be categoried, to, social (fb, linkedin), work related (bamboo, harvest), entertainment (snapchat, reddit), etc, etc


## PAGES

  #### MAIN PAGE
        CATEGORIES
        USERS EXISTING WEBSITES (VAULTPASS)
        CARD LAYOUT/WEBSITE (url_name, username, password) <- buttons to copy
        EDIT&DELETE BUTTON ON CARD LAYOUT
   
  #### EDIT WEBSITES
       DISPLAY url_name, username, password <- to be modified.
       DISPLAY CURRENT CATEGORY w/ DROPDOWN TO SELECT NEW IF NEED BE
       website_logo_img DISPLAY (API) ---- HARDCODE images for time being [STRETCH]
       SUBMIT BUTTON
       CANCEL BUTTON
       ERROR MESSAGE POP-UPS when fields are left empty on submit button press

  #### NEW WEBSITES
      TEXT FIELD FORMS FOR : website name, website url, username, password
      DROPDOWN MENU for categories (SOCIAL, WORK RELATED, ENTERTAINMENT)
      GENERATE RANDOM PSWRD BUTTON for randomized password.
      SUBMIT BUTTON
      CANCEL BUTTON
      ERROR MESSAGE POP-UPS when fields are left empty on submit button press and if URL already exists.

  #### HEADER
      VAULTPASS LOGO
      User name when signed in
      Organization name when signed in
      LOGOUT BUTTON when signed in
      When signed out, will have LOGIN BUTTON and REGISTER [stretch]



## ROUTES

  GET/POST ROUTE FOR EDIT WHEN CLICKED ON CARD - WEBSITES TABLE
  POST ROUTE FOR DELETE (MAIN) - WEBSITES
  GET/POST ROUTE TO ADD A WEBSITE - WEBSITES TABLE
  GET ROUTE FOR CATEGORIES BUTTONS (ALL, SOCIAL, WORK RELATED, ENTERTAINMENT) - WEBSITES TABLE
  (STAQCKOVERFLOW CHECK) COPY BUTTONS FOR username & password
  (GOOGLE IT) FOR redirect button FOR URL (ANCHOR TARGET=_blank)

  GET/POST ROUTE modify website_url, username, password text field
  generate random password BUTTON 
  dopdown menu change for CATEGORIES => join to cat
  POST ROUTE submit BUTTON res.redirect ('/') - Can be added to edit route?
  GET ROUTE cancel BUTTON


  TEXT FIELD GET/POST ROUTE for new website (website_url, username, password)
  generate random password BUTTON
  POST ROUTE dopdown menu for CATEGORIES (SOCIAL, WORK RELATED, ENTERTAINMENT)
  


Password generation based on criteria: This feature is not yet implemented in the provided code snippets.

User can edit and change their password: The database structure supports this, but the specific route/functionality is not shown in the provided code.

Copy to clipboard button: This feature is not yet implemented in the provided front-end code.

Site categorization: The current schema doesn't explicitly support categories, but this could be easily added as a new column or table.

CLINT: 
  TEXT FIELD GET/POST ROUTE for new website (website_url, username, password)
  GET/POST ROUTE generate random password BUTTON
  GET/POST ROUTE dopdown menu for CATEGORIES (SOCIAL, WORK RELATED, ENTERTAINMENT)


MATHEW:   
  GET/POST ROUTE FOR EDIT WHEN CLICKED ON CARD - WEBSITES TABLE
  GET/POST ROUTE FOR DELETE (MAIN) - WEBSITES
  GET/POST ROUTE TO ADD A WEBSITE - WEBSITES TABLE
  GET/POST ROUTE FOR CATEGORIES BUTTONS (ALL, SOCIAL, WORK RELATED, ENTERTAINMENT) - WEBSITES TABLE

ROHAN:    
  GET/POST ROUTE modify website_url, username, password text field
  GET/POST ROUTE generate random password BUTTON 
  GET/POST ROUTE dopdown menu change for CATEGORIES
  GET/POST ROUTE submit BUTTON
  GET/POST ROUTE cancel BUTTON