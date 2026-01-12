class Laptop{
    setFeatures(color,brand){
        this.laptopColor=color
        this.laptopBrand=brand
        console.log('new lap added');
        
    }
    showFeatures(){
        console.log(this.laptopBrand,this.laptopColor);
        
    }

}
var asus = new Laptop()
asus.setFeatures('black','asus')
asus.showFeatures()

var hp = new Laptop()
hp.setFeatures('gray','hp')
hp.showFeatures()