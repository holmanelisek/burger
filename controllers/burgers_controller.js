var express = require("express");
var burg = require("../models/burger.js");

var app = express();


//app router


module.exports = function(app,express){
    app.get("/index", function(req, res) {
        var not = [];
        var are = [];
        burg.selectAll().then(function(data){
            for(i=0;i<data.length;i++){
                if (data[i].eaten){
                     are.push(data[i])
                }else{
                     not.push(data[i]);
                }
                }
                res.render("index",{
                    uneatenburgers:not,
                    eatenburgers:are
                })
        }
        )
        
        });
    app.post("/index",function(req,res){
        burg.insertOne(req.body.task)
        if (err) throw err;
    res.redirect("/index");
    })
    };