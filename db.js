const mysql = require('mysql');

// Create a connection to MySQL Server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userdb' // Ensure this database exists
});

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');

    // Create Users Table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(100),
            last_name VARCHAR(100),
            dob DATE,
            username VARCHAR(100) UNIQUE,
            password VARCHAR(255)
        )
    `;

    connection.query(createTableQuery, (err, result) => {
        if (err) throw err;
        console.log('Users table created successfully!');
    });
});

module.exports = connection;