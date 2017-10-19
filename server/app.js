"use strict"
let express = require('express');
let app = express();

app.use('/', express.static(__dirname + "/../client"));

app.listen(3000, function(){
	console.log("server i sup on 3000");
});