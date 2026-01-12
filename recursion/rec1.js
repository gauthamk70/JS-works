// display hello worls n times

function display_hw(limit) {    //limit=3
    if (limit == 0) {          // f
        return
    }
    console.log("hello world!!");  //hw
    display_hw(limit - 1)         // limit = 2

}

display_hw(3)

function hai_n (limit){
    if(limit==0){
        return
    }
    console.log("hai");
    
    hai_n(limit-1)
}
hai_n(5)