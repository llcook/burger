// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
// });

var connection;

// Heroku deployment
/////////////////////////////

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "hacktheplanet",
        database: "todoagain_db"
    });
};
/////////////////////////////

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

// Export connection
// EXPORTED TO orm.js
module.exports = connection;