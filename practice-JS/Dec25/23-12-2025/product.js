var watch ={
    name:"fastrack",
    type:"smart",
    colour:"black",
    count:20

}
if("count" in watch){
    watch["count"]+=1
}
else{
    watch["count"]=1
}
console.log(watch);
