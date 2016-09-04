var fileDir = process.argv[2];
var fileExt =process.argv[3];
var filterfn = require("./filefilter.js")

filterfn(fileDir,fileExt,function(err,data){
   if(err){
       return err;
   } 
    data.forEach(function(file){
        console.log(file);
    });
});