const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')  // returns a promise
    .then(data => {
      return data.rows;
    });
};

const getPasswordById = function(id) {
  const query = `
  SELECT * FROM websites
  WHERE id = $1;
  `;
  return db.query(query, [id])
    .then(data => {
      return (data.rows[0]);
    })
    .catch(error => {
      console.log("error", error);
    });
};

const editVaultPass = (newUrl, newUsername, newPassword, id) => {
  console.log(newUrl, newUsername, newPassword, id);
  const query = `
  UPDATE websites
  SET url = $1, username = $2, password = $3
  WHERE websites.id = $4`
  ;
  return db.query(query, [newUrl, newUsername, newPassword, id])
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
      return (data.rows);
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
  RETURNING *
  `;
  return db.query(query, [user_id, org_id, url, username, password])
    .then(data => {
      return data.rows[0];
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


module.exports = { getUsers, getPasswordByUserId, addNewVaultPass, generatePassword, getPasswordById, editVaultPass };
