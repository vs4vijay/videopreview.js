(function() {
    //Declaring variables  
    var fs, reptxt, filedata;

    //Requiring files
    fs = require('fs');
    reptxt = require ('./replaceme');

    //Reading file test.txt
    fs.readFile("../test.txt",'utf8',function(err,data){
      if(err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
     }
     //Calling replacement function
     console.log(reptxt.replaceme(data,"npm","123"));
    });

}).call(this)