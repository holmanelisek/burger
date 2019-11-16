var orm = require("../config/orm");

//code to call the ORM functions 

var selectAll = orm.selectAll("burger_db");
var insertOne = orm.selectAll("burger_db","burger_name","eaten","name","eat");
var updateOne = orm.updateOne("name","eaten","eat");



module.exports = selectAll;
module.exports = insertOne;
module.exports = updateOne;