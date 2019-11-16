var connection = require('./connection.js');

var orm = {
    selectAll: function(database){
        var queryString = "SELECT * FROM ?";
        connection.query(queryString,[database], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    insertOne: function(database,var1,var2,name,eat){
      var queryString = "INSERT INTO ? (?, ?) VALUES[?,?]";
      connection.query(queryString,[database,var1,var2,name,eat], function(err,result){
        if (err) throw err;
        console.log(name+"has been added");
      })
    },
    updateOne: function(name,column,eat){
      var queryString = "UPDATE `?` SET `?` = `?'";
      connection.query(queryString,[name,column,eat],function(err,result){
        if(err) throw err;
        console.log(name+"has been updated");
      })
    }
}


module.exports = orm;