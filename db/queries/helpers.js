const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')  // returns a promise
    .then(data => {
      return data.rows;
    });
};

const getPasswordByUserId = function(id) {
  const query = `
  SELECT *
  FROM users
  JOIN organizations ON organizations.id = users.org_id
  JOIN websites ON websites.org_id = organizations.id
  WHERE users.id = $1;
  `;
  return db.query(query, [id])
    .then(data => {
      res.json(data.rows[0]);
    })
    .catch(error => {
      console.log("error", error);
    });
};
// add new vaultPass

const addNewVaultPass = (user_id, org_id, url, username, password) => {
  const query = `
  INSERT INTO websites (user_id, org_id, url, username, password)
  VALUES ($1, $2, $3, $4, $5)
  `;
  return db.query(query, [user_id, org_id, url, username, password])
    .then(data => {
      return data.rows;
    });
};


// Generate Random String as Password
function generatePassword() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&(){}';
  let randomString = '';
  for (let i = 16; i > 0; --i) {
    randomString += chars[Math.floor(Math.random() * chars.length)];
  }
  return randomString;
}


module.exports = { getUsers, getPasswordByUserId, addNewVaultPass };
