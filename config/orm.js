// Import (require) `connection.js` into `orm.js`
// NOTE: CATSAPP EXAMPLE SHOWS THIS CONNECTION AS SUCH
// BUT orm.js AND connection.js ARE IN THE SAME DIRECTORY -- WHY THIS SYNTAX?
var connection = require("../config/connection.js");

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

var orm = {};

//    * Export the ORM object in `module.exports`.
module.exports = orm;