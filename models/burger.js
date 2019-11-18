var orm = require("../config/orm");

//code to call the ORM functions 
module.exports = {
selectAll: function(){console.log("here burger");orm.selectAll("burgers")},
insertOne: function(name){orm.insertOne("burgers","name","eaten",name,false)},
updateOne: function(name){orm.updateOne(name,"eaten",true)}
}