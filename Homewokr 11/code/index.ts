// interface IMovie{
//     id: number,
//     title: string,
//     duration: number,
//     genre: string,
//     hasWonOscar?: boolean;
// }
// class Movie implements IMovie{
//     id: number;
//     title: string;
//     duration: number;
//     genre: string;
//     hasWonOscar?: boolean;
//     constructor(id: number, title: string, duration: number, genre: string, hasWonOscar?: boolean){
//         this.id = id;
//         this.title = title;
//         this.duration = duration;
//         this.genre = genre;
//         this.hasWonOscar = hasWonOscar;
//     }
// }
// class MovieLibrary{
//     movies: IMovie[];
//     constructor(){
//         this.movies = [];
//     }
//     addMovie(movie: IMovie): void{
//         this.movies.push(movie);
//     }
//     printMovies(genre: string = "action"): string[]{
//         const checkinghMovies = this.movies.filter(movie => movie.genre === genre);
//         const moviesPrinting  = checkinghMovies.map(movie => movie.title);
//         console.log(moviesPrinting);
//         return moviesPrinting;
//     }
//     static movieDetails(movie: Movie): string{
//         return `The name of movie is: ${movie.title} and his genre is: ${movie.genre}`;
//     }
// }
// const firstMovie = new Movie(1, "The Lord of the Rings: The Fellowship of the Ring", 178, "fantasy", true);
// const secondMovie = new Movie(2, "Harry Potter and the Philosopher's Stone", 152, "fantasy", true);
// const thirdMovie = new Movie(3, "The Hobbit: An Unexpected Journey", 169, "fantasy", false);
// const library = new MovieLibrary();
// library.addMovie(firstMovie);
// library.addMovie(secondMovie);
// library.addMovie(thirdMovie);
// console.log("All movies:");
// library.printMovies("fantasy");

interface IMovie {
    id: string,
    title: string,
    duration: number,
    genre: string,
    hasWonOscar?: boolean;
}

class Movie implements IMovie{
    private classId: string;
    private classTitle: string;
    private classDuration: number;
    private classGenre: string;
    private classHasWonOscar?: boolean;
    constructor(newId: string, newTitle: string, newDuration: number, newGenre: string, newHasWonOscar: boolean){
        this.classId = newId;
        this.classTitle = newTitle;
        this.classDuration = newDuration;
        this.classGenre = newGenre;
        this.classHasWonOscar = newHasWonOscar;
    }

    get id(): string{
        return this.classId;
    }

    get title(): string{
        return this.classTitle;
    }

    get duration(): number{
        return this.classDuration;
    }

    get genre(): string{
        return this.classGenre;
    }
}

class MovieLibrary{
    movies: IMovie[];
    constructor(){
        this.movies = [];
    }
    addMovie(movie: IMovie): void{
        this.movies.push(movie);
    }
    printMovies(genre: string = "action"): string[]{
        const checkinghMovies = this.movies.filter(movie => movie.genre === genre);
        const moviesPrinting = checkinghMovies.map(movie => movie.title);
        console.log(moviesPrinting);
        return moviesPrinting;
    }
    static movieDetails(movie: Movie): string{
        return `The name of movie is: ${movie.title} and his genre is: ${movie.genre}`;
    }
}
const firstMovie = new Movie("first", "The Lord of the Rings: The Fellowship of the Ring", 178, "fantasy", true);
const secondMovie = new Movie("second", "Harry Potter and the Philosopher's Stone", 152, "fantasy", true);
const thirdMovie = new Movie("third", "The Hobbit: An Unexpected Journey", 169, "fantasy", false);
const library = new MovieLibrary();
library.addMovie(firstMovie);
library.addMovie(secondMovie);
library.addMovie(thirdMovie);
console.log("All movies:");
library.printMovies("fantasy");


// Za ovoj bonus upotrebiv i void za tip kako sto zborevme na predavanjeto 
// Isto taka za ovoj bonus propertinjata ne gi napraviv da bidat private
// bidejki imav problem , nemozev nikako da ja pristapam nivnata vrednost 
// postojano dobivav greska , pa za da ne zakocam prodolziv vaka da go pravam ova 
// Probav isto taka da upotrebam getters i setters za da gi pristapam kako od kodot od predavanjeto
// getId():number{             // vaka pisav za getter
//     return this.id;
// }
// setId(value: number){       // vaka pisav za setter
//     this.id = id;
// }
// Pa ako bi mozele da mi pokazite kako mozam da go resam ova. :) :D 







