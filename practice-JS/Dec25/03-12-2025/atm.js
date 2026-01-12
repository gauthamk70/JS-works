var dbpin=2323
var cpin=2323

var dbBalance=5000
var cwithdraw=4500

if(dbpin==cpin){
    if(cwithdraw%100==0){
        if(dbBalance>=cwithdraw){
            console.log('sucess');
            

        }
        else{
            console.log('not enough moneyyy');
            
        }

    }
    else{
        console.log('withdraw only multiples of 100');
        
    }

}
else{
    console.log('pin wrong');
    
}