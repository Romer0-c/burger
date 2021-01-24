
// 3. Inside the `burgers_controller.js` file, import the following:

// * Express
// * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.


// var burger = "burger";

// router.get("/", function (req,res){
//     var queryString = "SELECT * FROM burger ;"
//     connection.query(queryString, function (err, result){
//         if (err) {
//          throw err;
//         }
//         res.render("index", { burgers: result });
//     });
// }) 

// const getAllBurgers = function(){

// };

// const addBurger = function(){

// };

// const updateBurger 

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    // var hbsObject = {
    //   burgers: data
    // };
    // console.log(hbsObject);
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
  console.log(req.body.devoured);
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;