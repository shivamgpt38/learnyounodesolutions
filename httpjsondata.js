var http = require("http");
var url = require("url");


function parsedUrl(url){
    if(url.pathname === "/api/parsetime"){
        var date  =new Date(url.query.iso);
        return{
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        } ;
    }
    else if(url.pathname === "/api/unixtime"){
        return {
            unixtime: new Date(url.query.iso).getTime()
        };
    }
    else return null;
}

var server = http.createServer(function(req,res){
    var urlPath = url.parse(req.url,true);
    console.log("url:"+urlPath);
    var resources = parsedUrl(urlPath);
    console.log("source:"+resources);
    if(resources){
        res.writeHead(200,{"Content-Type":"application/json"});
    }
    res.end(JSON.stringify(resources));
});


server.listen(Number(process.argv[2]))