const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
const personalMovieDB = {
    count:numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const a = prompt('Сколько фильмов вы уже посмотрели?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Сколько фильмов вы уже посмотрели?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;


console.log(personalMovieDB);