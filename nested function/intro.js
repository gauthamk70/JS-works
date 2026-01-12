function outerfunction() {
    function inner() {
        console.log("inner function");

    }
    inner()
}
outerfunction()