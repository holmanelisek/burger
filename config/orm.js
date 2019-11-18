var connection = require('./connection.js');

module.exports = {
  selectAll: function(table){
    console.log("Here orm");
    var queryString = ("SELECT * FROM " + table);
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
},
insertOne: function(table,var1,var2,name,eat){
  var queryString = "INSERT INTO ? (?, ?) VALUES[?,?]";
  connection.query(queryString,[table,var1,var2,name,eat], function(err,result){
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

