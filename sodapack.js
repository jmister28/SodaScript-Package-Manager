#!/usr/bin/env node

var request = require('request');
var optimist = require('optimist');
var fs = require('fs');

var url = "http://192.168.0.50";
var ARGS = optimist.argv
var input = ARGS["i"]
var output = ARGS["o"]
if(input){
	// code
		request.get(url + ':1337/user?name=' + input, function(err, resp){
		if(err) throw err;
		if(output){
			fs.writeFile(output,resp.body,function(){
				if(err) throw err;
				console.log("Saved data to " + output)
			})
		}
		else
		{
			console.log(resp.body)
		}
	})
}
else {
	console.log("Hey, it doesn't look like you have any input");
}



