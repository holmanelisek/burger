var connection = require('./connection.js');

var orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    insertOne: function(name,eaten){
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES[?,?]";
      connection.query(queryString,[name,eaten], function(err,result){
        if (err) throw err;
        console.log(name+"has been added");
      })
    },
    updateOne: function(name,eaten){
      var queryString = "UPDATE `?` SET `devoured` = `?'";
      connection.query(queryString,[name,eaten],function(err,result){
        if(err) throw err;
        console.log(name+"has been updated");
      })
    }
}


module.exports = orm;