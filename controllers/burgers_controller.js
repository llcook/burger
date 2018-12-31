// Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

var express = require("express");

var burger = require("../models/burger.js");

// 4. Create the `router` for the app
var router = express.Router();

// HERE WE ADD router.get, router.post, router.put, router.delete....

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log("hbsObject: " + JSON.stringify(hbsObject));
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "ID = " + req.params.id;

    console.log("Condition: ", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "ID = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// and export the `router` at the end of your file. 
module.exports = router;