// 1  0  0  1
// 0  1  1  0
// 0  1  1  0
// 1  0  0  0

for(let r = 1 ; r<=4 ;r++){
    let result = ""
    for(let c =1 ; c<= 4 ;c++){
        if((r==c)||(r+c==5)){
         result+=1
        }
        else{result+=0}
    }
    console.log(result);
    
}