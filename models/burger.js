// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// // * Export at the end of the `burger.js` file.

// Import the ORM to create functions that will interact with the database.
const e = require("express");
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res); 
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  modelDeleteAsyncExample: async function (columnName, columnValue, cb) {


    const results = await orm.ormDeleteAsyncExample("burgers", columnName, columnValue);

    // Add business logic here, before we send back to controller.
    // This is a good place to add logic where the database cannot do for you.
    // e.g. What if we need to encrypt some data from the database? Or, add data to database, etc.

    return results;

  }
};

// Export the database functions for the controller (burger_Controller.js).
module.exports = burger;
