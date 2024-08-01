INSERT INTO organizations (id, name, city, street, country, postal) VALUES
(1, 'Tech Innovators Inc.', 'San Francisco', '123 Silicon Ave', 'USA', '94107'),
(2, 'Green Solutions Ltd.', 'Vancouver', '456 Maple St', 'Canada', 'V5K 0A1'),
(3, 'Healthcare Heroes', 'London', '789 Health Blvd', 'UK', 'E1 6AN'),
(4, 'EduTech Pioneers', 'Berlin', '101 Learning Way', 'Germany', '10115'),
(5, 'Finance Gurus', 'New York', '202 Wall St', 'USA', '10005'),
(6, 'Creative Minds Agency', 'Paris', '303 Art Rd', 'France', '75001'),
(7, 'Global Logistics Co.', 'Singapore', '404 Trade Ln', 'Singapore', '049319'),
(8, 'Sustainable Energy Corp.', 'Copenhagen', '505 Eco Blvd', 'Denmark', '2100');

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



INSERT INTO websites (id, user_id, org_id, category, url, username, password) VALUES
(1, 10, 5, 'Work-Related', 'https://worktechinnovators.com', 'linda_work', 'linda_work_password'),
(2, 10, 5, 'Social', 'https://socialinnovators.com', 'linda_social', 'linda_social_password'),
(3, 10, 5, 'Entertainment', 'https://entertainmentinnovators.com', 'linda_entertainment', 'linda_entertainment_password'),
(4, 10, 5, 'Work-Related', 'https://workprojects.com', 'linda_projects', 'linda_projects_password'),

(5, 15, 3, 'Work-Related', 'https://workgreensolutions.com', 'joseph_work', 'joseph_work_password'),
(6, 15, 3, 'Social', 'https://socialgreensolutions.com', 'joseph_social', 'joseph_social_password'),
(7, 15, 3, 'Entertainment', 'https://entertainmentgreensolutions.com', 'joseph_entertainment', 'joseph_entertainment_password'),
(8, 15, 3, 'Work-Related', 'https://workfinancegurus.com', 'joseph_finance', 'joseph_finance_password'),(9, 7, 7, 'Work-Related', 'https://workhealthcareheroes.com', 'michael_work', 'michael_work_password'),
(10, 7, 7, 'Social', 'https://socialhealthcareheroes.com', 'michael_social', 'michael_social_password'),
(11, 7, 7, 'Entertainment', 'https://entertainmenthealthcareheroes.com', 'michael_entertainment', 'michael_entertainment_password'),
(12, 7, 7, 'Work-Related', 'https://workheroesprojects.com', 'michael_projects', 'michael_projects_password'),

(13, 22, 2, 'Work-Related', 'https://workedutechpioneers.com', 'sandra_work', 'sandra_work_password'),
(14, 22, 2, 'Social', 'https://socialedutechpioneers.com', 'sandra_social', 'sandra_social_password'),
(15, 22, 2, 'Entertainment', 'https://entertainmentedutechpioneers.com', 'sandra_entertainment', 'sandra_entertainment_password'),
(16, 22, 2, 'Work-Related', 'https://workpioneersprojects.com', 'sandra_projects', 'sandra_projects_password'),

(17, 18, 8, 'Work-Related', 'https://worksustainableenergy.com', 'elizabeth_work', 'elizabeth_work_password'),
(18, 18, 8, 'Social', 'https://socialsustainableenergy.com', 'elizabeth_social', 'elizabeth_social_password'),
(19, 18, 8, 'Entertainment', 'https://entertainmentsustainableenergy.com', 'elizabeth_entertainment', 'elizabeth_entertainment_password'),
(20, 18, 8, 'Work-Related', 'https://workenergyprojects.com', 'elizabeth_projects', 'elizabeth_projects_password');

ALTER SEQUENCE websites_id_seq RESTART WITH 1000;
ALTER SEQUENCE organizations_id_seq RESTART WITH 2000;
ALTER SEQUENCE users_id_seq RESTART WITH 5000;
