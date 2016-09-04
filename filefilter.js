var fs = require("fs");
var path = require("path");
var fileDir = process.argv[2];
var fileExt = "."+process.argv[3];

fs.readdir(fileDir,function(err,files){
   if(err){
       throw err;
   } 
    
    files.forEach(function(filename){
       var ext = path.extname(filename);
        if(ext === fileExt){
            console.log(filename);
        }
    });
});