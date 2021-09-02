let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
	pesonalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genders: [],
		privat: false,
	};


for (let i = 0; i < 2; i++) {
	const a = prompt("Какой фильм вы смотрели последним?", ""),
		b = prompt("на сколько оцените его?", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		pesonalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}

}

if (pesonalMovieDB.count < 10) {
	alert("Маловато фильмов");
} else if (pesonalMovieDB.count >= 10 && pesonalMovieDB.count < 30) {
	alert("Вы - киноман");
} else if (pesonalMovieDB.count >= 30) {
	alert("Ебать вы задрот!!!");
} else {
	alert('error');
}

console.log(pesonalMovieDB);

