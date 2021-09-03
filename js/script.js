let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genders: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Какой фильм вы смотрели последним?", ""),
				b = prompt("на сколько оцените его?", "");

			if (a != null && b != null && a != "" && b != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert("Маловато фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert("Вы - киноман");
		} else if (personalMovieDB.count >= 30) {
			alert("Ебать вы задрот!!!");
		} else {
			alert('error');
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			personalMovieDB.genders[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function () {
		if (personalMovieDB.privat == false) {
			console.log(personalMovieDB);
		}
	},
};
п