const db = require('../connection');

// Get specific website by ID

const getWebsiteById = (id) => {
  const query = `
  SELECT * FROM websites
  WHERE id = $1;
  `;
  return db.query(query, [id])
    .then(data => {
      return data.rows[0];
    })
    .catch(error => {
      console.log('Error fetching website by ID:', error);
      throw error;
    });
};

const getWebsiteByUserId = (userId) => {
  const query = `
    SELECT * FROM websites
    WHERE user_id = $1;
  `;
  return db.query(query, [userId])
    .then(data => {
      return data.rows; // Should return an array of websites
    })
    .catch(error => {
      console.log('Error fetching websites by user ID:', error);
      throw error;
    });
};

const deleteWebsiteById = (id) => {
  const query = `
  DELETE FROM websites
  WHERE id = $1;
  `;

  return db.query(query, [id])
    .then(() => {
      console.log('Website deleted with ID:', id);
    })
    .catch(error => {
      console.log('Error deleting website by ID:', error);
      throw error;
    });
};

const sortByUserByCategories = (userId, category) => {
  const queryParams = [userId];
  let query = `
  SELECT *
  FROM websites
  WHERE websites.user_id = $1
  `;

  if (category) {
    query += ` AND websites.category = $2`;
    queryParams.push(category);
  }

  return db.query(query, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.log('Error fetching websites by user and category:', error);
      throw error;
    });
  
};

module.exports = { getWebsiteById, getWebsiteByUserId, deleteWebsiteById, sortByUserByCategories }