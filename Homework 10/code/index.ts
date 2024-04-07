// Part 1
interface Movie{
    id: number;
    title: string;
    duration: number;
    genre: string;
    hasWonOscar?: boolean;
}
const movies: Movie[] = [];
function addMovies(title: string, duration: number, genre: string, hasWonOscar: boolean){
    const addNewMovie: Movie ={
        id: movies.length,
        title: title,
        duration: duration,
        genre: genre,
        hasWonOscar: hasWonOscar
    };
    movies.push(addNewMovie);
} 
// Part 2 
function printMovies(moviesList: Movie[], genre: string = "action"){
    const checkinghMovies = moviesList.filter(movie => movie.genre === genre);
    const moviesPrinting = checkinghMovies.map(movie => movie.title);
    console.log(moviesPrinting);
    return moviesPrinting;
}

