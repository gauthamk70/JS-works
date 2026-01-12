// create a class movie[id,title,language,genre,setMovie(), dispalyMovie()]
// create 2 movie object

class Movie {
    setMovie(id,title,language,genre){
        this.id=id
        this.title=title
        this.language=language
        this.genre=genre
    }
displayMovie(){
    console.log(`id:${this.id}, title:${this.title}, language:${this.language}, genre:${this.genre}`);
    
}
}

var conjuringinstance = new Movie()
var sarvamMayaInstance = new Movie()
conjuringinstance.setMovie(2,'conjuring','english','horror')
sarvamMayaInstance.setMovie(3,'sarvam-maya','malayalam','comedy')
conjuringinstance.displayMovie()
sarvamMayaInstance.displayMovie()
