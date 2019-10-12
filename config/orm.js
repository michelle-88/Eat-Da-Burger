var connection = require("./connection");

// Updated 'devoured' info will come from client side as an object, i.e. {devoured: true}
// This function will transform the object to a string so it can be used in the db query
function objToString(obj) {
    var arr = [];

    for(var key in obj) {
        var value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)) {
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

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

    updateOne: function(tableName, objColVal, condition, cb) {
        var queryString = `UPDATE ${tableName} SET ${objToString(objColVal)} WHERE ${condition}`;
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }

};

// Export orm object so it can be accessed by the model
module.exports = orm;