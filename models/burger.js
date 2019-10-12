var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function() {


    },

    updateOne: function(objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

// Export burger object so its methods can be used by the controller
module.exports = burger;