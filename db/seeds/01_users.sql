INSERT INTO users (id, name, org_id, is_admin, login_username, login_password) VALUES 
(1, 'Paul', 5, 1, 'paul_username', 'paul_password'),
(2, 'Mary', 3,  0, 'mary_username', 'mary_password'),
(3, 'John', 7, 1, 'john_username', 'john_password'),
(4, 'Susan', 2,  0, 'susan_username', 'susan_password'),
(5, 'David', 8, 1, 'david_username', 'david_password'),
(6, 'Lisa', 4,  0, 'lisa_username', 'lisa_password'),
(7, 'Michael', 6, 1, 'michael_username', 'michael_password'),
(8, 'Karen', 5,  0, 'karen_username', 'karen_password'),
(9, 'James', 1, 1, 'james_username', 'james_password'),
(10, 'Linda', 3,  0, 'linda_username', 'linda_password'),
(11, 'Robert', 7, 1, 'robert_username', 'robert_password'),
(12, 'Patricia', 2,  0, 'patricia_username', 'patricia_password'),
(13, 'Charles', 4, 1, 'charles_username', 'charles_password'),
(14, 'Barbara', 8,  0, 'barbara_username', 'barbara_password'),
(15, 'Joseph', 5, 1, 'joseph_username', 'joseph_password'),
(16, 'Jennifer', 6,  0, 'jennifer_username', 'jennifer_password'),
(17, 'Thomas', 1, 1, 'thomas_username', 'thomas_password'),
(18, 'Elizabeth', 3,  0, 'elizabeth_username', 'elizabeth_password'),
(19, 'Christopher', 7, 1, 'christopher_username', 'christopher_password'),
(20, 'Nancy', 2,  0, 'nancy_username', 'nancy_password'),
(21, 'Daniel', 8, 1, 'daniel_username', 'daniel_password'),
(22, 'Sandra', 4,  0, 'sandra_username', 'sandra_password'),
(23, 'Matthew', 5, 1, 'matthew_username', 'matthew_password'),
(24, 'Ashley', 6,  0, 'ashley_username', 'ashley_password'),
(25, 'Joshua', 1, 1, 'joshua_username', 'joshua_password');

INSERT INTO organizations (id, name, city, street, country, postal) VALUES 
(1, 'Tech Innovators Inc.', 'San Francisco', '123 Silicon Ave', 'USA', '94107'),
(2, 'Green Solutions Ltd.', 'Vancouver', '456 Maple St', 'Canada', 'V5K 0A1'),
(3, 'Healthcare Heroes', 'London', '789 Health Blvd', 'UK', 'E1 6AN'),
(4, 'EduTech Pioneers', 'Berlin', '101 Learning Way', 'Germany', '10115'),
(5, 'Finance Gurus', 'New York', '202 Wall St', 'USA', '10005'),
(6, 'Creative Minds Agency', 'Paris', '303 Art Rd', 'France', '75001'),
(7, 'Global Logistics Co.', 'Singapore', '404 Trade Ln', 'Singapore', '049319'),
(8, 'Sustainable Energy Corp.', 'Copenhagen', '505 Eco Blvd', 'Denmark', '2100');

INSERT INTO websites (id, user_id, org_id, url, username, password) VALUES 
(1, 10, 5, 'https://techinnovators.com', 'linda_website', 'linda_web_password'),
(2, 15, 3, 'https://greensolutions.com', 'joseph_website', 'joseph_web_password'),
(3, 7, 7, 'https://healthcareheroes.com', 'michael_website', 'michael_web_password'),
(4, 22, 2, 'https://edutechpioneers.com', 'sandra_website', 'sandra_web_password'),
(5, 18, 8, 'https://financegurus.com', 'elizabeth_website', 'elizabeth_web_password');
