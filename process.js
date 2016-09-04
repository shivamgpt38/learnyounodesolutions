var processArray = process.argv.slice(2);
var sum = 0;
for(var i=0;i<processArray.length;i++){
    sum += Number(processArray[i]);
    
}
console.log(sum);
return sum;

