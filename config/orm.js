var connection = require("./connection");

// Create the following methods in the orm: selectAll(), insertOne(), updateOne()

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },

    insertOne: function() {


    },

    updateOne: function() {

    }

};

// Export orm object so it can be accessed by the model
module.exports = orm;