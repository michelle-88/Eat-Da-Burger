var express = require("express");

var router = express.Router();

// Require the model file so controller can utilize its db functions
var burger = require("../models/burger");

// GET route that pulls all burger data from db and renders it on index page
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

// PUT route that will update burger's 'devoured' state in db

router.put("/api/burgers/:id", function(req, res) {
    // Id of burger that was clicked will be provided in the req parameters
    var condition = `id=${req.params.id}`;
    console.log(`condition:${condition}`);

    // Call burger model method to update db
    burger.updateOne(
        // New 'devoured' state will be provided in req body
        {devoured: req.body.devoured},
        condition,
        function(result) {
            if(result.changedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
})

// Export this router instance so it can be accessed by server
module.exports = router;