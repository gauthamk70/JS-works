class Movie {
    movie_details(title,genre,language){
        this.title=title
        this.genre=genre
        this.language=language
    }
    display_movie_details(){
        console.log(this.title,this.language,this.genre);
        
    }
}
var interstellar = new Movie()
interstellar.movie_details("interstellar",'science fiction','english')
interstellar.display_movie_details()

var pandipada = new Movie()
pandipada.movie_details('pandipada','comedy','malayalam')
pandipada.display_movie_details()