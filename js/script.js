let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
	pesonalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genders: [],
		privat: false,
	};

const a = prompt("Какой фильм вы смотрели последним?"),
		b = prompt("на сколько оцените его?"),
		c = prompt("Какой фильм вы смотрели последним?"),
		d = prompt("на сколько оцените его?");		

pesonalMovieDB.movies[a] = b;
pesonalMovieDB.movies[c] = d;

console.log(pesonalMovieDB);

