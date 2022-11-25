// import { movies } from "./data.js";
// console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => {
    // Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
    const rawList = moviesArray.map((movie) => movie.director);
    // usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
    const cleanList = rawList.filter(
      (director, index) => rawList.indexOf(director) === index
    );
    // returnamos la variable que queremos usar :)
    return cleanList;
  };
  console.log("1. Clean list:");
  console.table(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (moviesArray) => {
    const dramaMovies = (moviesArray).filter(
        (movie) =>
            movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return dramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) = (moviesArray) => {
  const scores = moviesArray.reduce((total, movie) => {
    return total += movie.score
  }, 0);
  const totalMovieScore = scores / moviesArray.length;
  return totalMovieScore.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
  const drama = moviesArray.filter((movieDrama) => {
    return movieDrama.genre.includes("Drama");
  });
}
const scores = drama.map((movie) => movie.score);

let total = 0;
scores.forEach((scores) => (total += scores));
  return (total / drama.length).toFixed(2);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
  const copyOfMovies = moviesArray.map((movie) => movie);
  copyOfMovies.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title)
  });
  return copyOfMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabeticallyRaphaela(moviesArray) {
  let movieTitlesAscending = moviesArray
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((movie) => movie.title)
    .slice(0, 21);

  return movieTitlesAscending;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (moviesArray) => {
  moviesArray.map((movie) => movie.duration);
  
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}∫