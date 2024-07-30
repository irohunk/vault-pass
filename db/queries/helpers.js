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

// Random Password Generator Function
const randomPassGenerator = function() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();
  // concat the chars
  const chars = lower + upper;
  // return using Array.from setting the array to 8
  return Array.from({length: 8}, () =>
    chars[Math.floor(Math.random() * chars.length)]).join('');
};

console.log(randomPassGenerator());

module.exports = { getUsers, getPasswordByUserId };
