let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

let pesonalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genders: [],
		privat: false,
	};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Какой фильм вы смотрели последним?", ""),
			b = prompt("на сколько оцените его?", "");
	
		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			pesonalMovieDB.movies[a] = b;
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (pesonalMovieDB.count < 10) {
		alert("Маловато фильмов");
	} else if (pesonalMovieDB.count >= 10 && pesonalMovieDB.count < 30) {
		alert("Вы - киноман");
	} else if (pesonalMovieDB.count >= 30) {
		alert("Ебать вы задрот!!!");
	} else {
		alert('error');
	}
}

detectPersonalLevel();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		pesonalMovieDB.genders[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();

function showMyDB() {
	if (pesonalMovieDB.privat == false) {
		console.log(pesonalMovieDB);
	}
} 

showMyDB();

