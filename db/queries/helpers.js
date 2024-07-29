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
      return data.rows;
    });
};

module.exports = { getUsers, getPasswordByUserId };
