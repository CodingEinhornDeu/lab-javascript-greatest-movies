// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(mArray) {
  const allDirectors = mArray.map(function (direct) {
    return direct.director;
  });
  return allDirectors;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMov) {
  let numbOfMov = arrMov.filter(function (movie) {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
      return movie;

  });
  return (numbOfMov.length);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieYear) {
  const result = movieYear.sort((firstScore, secondScore) => {
    if (firstScore.year > secondScore.year) {
      return -1;
    } else {
      return 1;
    }
  });
  return result;

}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
