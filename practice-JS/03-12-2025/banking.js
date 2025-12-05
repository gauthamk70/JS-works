var dbpin=2323
var cpin=2323

var dbBalance=5000
var cwithdraw=40500

if(dbpin==cpin){
    if(cwithdraw<=dbBalance){
        console.log('withdraw sucess');
        

    }
    else{
        console.log('insufficient fund');
        
    }

}
else{
    console.log('incorrect pin');
    
}