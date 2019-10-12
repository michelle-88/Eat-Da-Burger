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

// Export this router instance so it can be accessed by server
module.exports = router;