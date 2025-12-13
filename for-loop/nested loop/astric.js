// *   *   *   *   *
// *   *   *   *   *
// *   *   *   *   *

for (let row = 1; row <= 3; row++) {         // r=1                  r=2
    let pattern = ""                        //  pattern=""        pattern=""
    for (let col = 1; col <= 5; col++) {    // c= 1  2  3  4  5   same as before
        pattern = pattern + "* \t"          // *  *  *  *  *  *     same

    }
    console.log(pattern);                    //  *  *  *  *  *     //  *  *  *  *  *
                                                                   //  *  *  *  *  *
}