

var s2,s3,s31,s4,s11,url,url1;


// async function res(){
//     try{
//     url1="https://www.omdbapi.com/?type=series&s=Game&apikey=b65f2e76"
//     url="https://www.omdbapi.com/?s=Batman&page=2&apikey=b65f2e76"

//     s2= await fetch(url);
//     s3= await s2.json();

// s31={"Search":[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"tt4116284","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"},
// {"Title":"The Hunger Games","Year":"2012","imdbID":"tt1392170","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg"},{"Title":"The Hunger Games: Catching Fire","Year":"2013","imdbID":"tt1951264","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SX300.jpg"},{"Title":"The Hunger Games: Mockingjay - Part 1","Year":"2014","imdbID":"tt1951265","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_SX300.jpg"},{"Title":"The Hunger Games: Mockingjay - Part 2","Year":"2015","imdbID":"tt1951266","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_SX300.jpg"},{"Title":"Patriot Games","Year":"1992","imdbID":"tt0105112","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA3OTA0NjI0Nl5BMl5BanBnXkFtZTgwNjUwODQxMTE@._V1_SX300.jpg"},{"Title":"Funny Games","Year":"2007","imdbID":"tt0808279","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg4OTExNTYzMV5BMl5BanBnXkFtZTcwOTg1MDU1MQ@@._V1_SX300.jpg"},{"Title":"Sacred Games","Year":"2018–2019","imdbID":"tt6077448","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"},{"Title":"Funny Games","Year":"1997","imdbID":"tt0119167","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2ZhZDlmZDMtMDk5OC00YjhiLTgxOTAtYWEwMzhiMjJhMmEwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Reindeer Games","Year":"2000","imdbID":"tt0184858","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjNmNWIwZTAtMjM1MS00ODNiLTljYzMtNGI1ZmRkMmIxYzJiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Asterix at the Olympic Games","Year":"2008","imdbID":"tt0463872","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg1MzkwMzg2Ml5BMl5BanBnXkFtZTcwNTg4MzQ4MQ@@._V1_SX300.jpg"},

// {"Title":"The Assassination of Jesse James by the Coward Robert Ford","Year":"2007","imdbID":"tt0443680","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_SX300.jpg"},{"Title":"James and the Giant Peach","Year":"1996","imdbID":"tt0116683","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTNkNWIwNGUtNTJlOC00NDU3LTk0NWEtNjNjNDM4NzRiNThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"The Incredible Jessica James","Year":"2017","imdbID":"tt5990342","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUxODczMTQ2Ml5BMl5BanBnXkFtZTgwNDI1ODA5MjI@._V1_SX300.jpg"},{"Title":"James White","Year":"2015","imdbID":"tt4288636","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjE4MzU2NjEwN15BMl5BanBnXkFtZTgwNDQyMDE3NjE@._V1_SX300.jpg"},{"Title":"James Dean","Year":"2001","imdbID":"tt0240628","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDg2OTdhYmUtYjkwYS00OTE0LWE5MDAtMWY3MDRiMTI5ZGNkXkEyXkFqcGdeQXVyNTE4MzAyNDk@._V1_SX300.jpg"},{"Title":"Jesse James","Year":"1939","imdbID":"tt0031507","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjViMTUyZGYtZTU4My00OGZkLWE0NTQtYTdkNWI1YzcyZjgzXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SX300.jpg"},{"Title":"Comedy Central Roast of James Franco","Year":"2013","imdbID":"tt3098812","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2M0ZjU4OTktYzA2Zi00MmM2LWFkNDUtZDZiYzY4ZDI2ZTQyXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg"},{"Title":"The Return of Frank James","Year":"1940","imdbID":"tt0032983","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmMzZDZlNmYtMjZhMS00OGFiLTkyMjgtODk4YzFhNWM5ODM2XkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg"},{"Title":"Whitey: United States of America v. James J. Bulger","Year":"2014","imdbID":"tt3326366","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcwNDQ4MTA2OF5BMl5BanBnXkFtZTgwNTc4ODU3MTE@._V1_SX300.jpg"},{"Title":"I Shot Jesse James","Year":"1949","imdbID":"tt0041497","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGE3OTU3YWYtNjg0NC00ODQzLTk2MGMtNTdiYjZlYjc3NDNjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},

// {"Title":"The Gold Rush","Year":"1925","imdbID":"tt0015864","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Fool's Gold","Year":"2008","imdbID":"tt0770752","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg3NTQ2MDY4OF5BMl5BanBnXkFtZTcwOTAzMjU1MQ@@._V1_SX300.jpg"},{"Title":"Gold","Year":"2016","imdbID":"tt1800302","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzI1NjI5OTUyM15BMl5BanBnXkFtZTgwOTM4NzY2MDI@._V1_SX300.jpg"},{"Title":"Woman in Gold","Year":"2015","imdbID":"tt2404425","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTExMTUxNDQ5MjdeQTJeQWpwZ15BbWU4MDk4NTgxMzQx._V1_SX300.jpg"},{"Title":"Dora and the Lost City of Gold","Year":"2019","imdbID":"tt7547410","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"},{"Title":"City Slickers II: The Legend of Curly's Gold","Year":"1994","imdbID":"tt0109439","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjQ3NzM2NjctN2JjMy00M2NmLWJmMGItY2UxYjAzYWFhYmI1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"GOLD","Year":"2018","imdbID":"tt6173990","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2QwNmIzNzEtMzlhMS00MmU1LWFjZGYtNjc5ZTg3NTE5MWY1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"},{"Title":"Allan Quatermain and the Lost City of Gold","Year":"1986","imdbID":"tt0092534","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDJiMzA2MzctYzIyYy00NGQ4LWFjMWMtM2RjYmE3MzZmZGJjL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"Mackenna's Gold","Year":"1969","imdbID":"tt0064615","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjE4NDFmNTctYTBjMy00ZjAwLWI3ZWUtNWU1YzNmZTUyYTkyXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"},{"Title":"St Trinian's 2: The Legend of Fritton's Gold","Year":"2009","imdbID":"tt1210106","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmFhOTRiODctMjVjOS00ZGIyLWFmM2YtYzhkNDM5NGFkYzcyXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"},
// {"Title":"Percy Jackson & the Olympians: The Lightning Thief","Year":"2010","imdbID":"tt0814255","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ5NDlmZWUtMjIyMC00NzQ3LTg3OWYtMzRkY2FiNzQ0Njc4XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"},{"Title":"The Book Thief","Year":"2013","imdbID":"tt0816442","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTE3NzkyMjAyNF5BMl5BanBnXkFtZTgwMDc5MTE0MDE@._V1_SX300.jpg"},{"Title":"Identity Thief","Year":"2013","imdbID":"tt2024432","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY3NzM5MTk2Nl5BMl5BanBnXkFtZTcwMDQ4MjQ3OA@@._V1_SX300.jpg"},{"Title":"To Catch a Thief","Year":"1955","imdbID":"tt0048728","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODM2ODgyOGYtYzYwMC00ZTEwLTg2MmItZDI2OTdhMTdiMGFiL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"Honest Thief","Year":"2020","imdbID":"tt1838556","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjEwNjYyMTMtODc5Yi00NTg5LTkwMzAtZTkyOTcyNTFkMGIyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"},{"Title":"The Cook, the Thief, His Wife & Her Lover","Year":"1989","imdbID":"tt0097108","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTlmM2U5YmQtMTcxYy00MzgyLTkyMDItZjY5Yjc3OTJkMTAzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Thief","Year":"1981","imdbID":"tt0083190","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmRmNWJjODMtMTdhOC00YTg5LTljNDItMWVmMTFlZTU1MTYxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"The Thief of Bagdad","Year":"1940","imdbID":"tt0033152","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZWFhYjg4NTEtY2IzMS00YTc2LTg1NGUtMTEzNDBlZDIxZTk3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"},{"Title":"The Good Thief","Year":"2002","imdbID":"tt0281820","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY2NDUyNDM5NV5BMl5BanBnXkFtZTYwODEzNTk5._V1_SX300.jpg"},{"Title":"The Thief of Bagdad","Year":"1924","imdbID":"tt0015400","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmM0MjdkMDQtMDMwMy00ZjE4LThjMDUtNjA4ZjkxYzM0MWRjXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"},
// {"Title":"Fast & Furious 6","Year":"2013","imdbID":"tt1905041","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"},{"Title":"The Fast and the Furious","Year":"2001","imdbID":"tt0232500","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Fast Five","Year":"2011","imdbID":"tt1596343","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"},{"Title":"Fast & Furious","Year":"2009","imdbID":"tt1013752","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"2 Fast 2 Furious","Year":"2003","imdbID":"tt0322259","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"The Fast and the Furious: Tokyo Drift","Year":"2006","imdbID":"tt0463985","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"},{"Title":"Fast & Furious Presents: Hobbs & Shaw","Year":"2019","imdbID":"tt6806448","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},{"Title":"F9: The Fast Saga","Year":"2021","imdbID":"tt5433138","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"},{"Title":"Fast Times at Ridgemont High","Year":"1982","imdbID":"tt0083929","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"},{"Title":"Fast Food Nation","Year":"2006","imdbID":"tt0460792","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzM0ODQ5OGItZDZhMy00NDk0LWJmNTgtZGRiMTBjMDI1YTAwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}]}
//     s4=s31.Search;
//     s1(s4);
//     console.log("success",s4)
//     }
//     catch(error){
    
//         console.log("error")
//     }
//     }
//     res();


    s31={"Search":[{"Title":"Batman Begins","label":"RECOMMENDED","Year":"2005","imdbID":"8.6","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"7.1","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"8.5","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"9.0","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"6,2","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"5.4","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"9.1","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"9.4","label":"RECOMMENDED","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"8.1","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"},
{"Title":"The Hunger Games","Year":"2012","imdbID":"8.4","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg"},{"Title":"The Hunger Games: Catching Fire","Year":"2013","imdbID":"7.0","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SX300.jpg"},{"Title":"The Hunger Games: Mockingjay - Part 1","Year":"2014","imdbID":"7.6","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_SX300.jpg"},{"Title":"The Hunger Games: Mockingjay - Part 2","Year":"2015","imdbID":"8.2","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_SX300.jpg"},{"Title":"Patriot Games","Year":"1992","imdbID":"5.4","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA3OTA0NjI0Nl5BMl5BanBnXkFtZTgwNjUwODQxMTE@._V1_SX300.jpg"},{"Title":"Funny Games","Year":"2007","imdbID":"6.9","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg4OTExNTYzMV5BMl5BanBnXkFtZTcwOTg1MDU1MQ@@._V1_SX300.jpg"},{"Title":"Sacred Games","Year":"2018–2019","imdbID":"8.8","label":"RECOMMENDED","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"},{"Title":"Funny Games","Year":"1997","imdbID":"6.2","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2ZhZDlmZDMtMDk5OC00YjhiLTgxOTAtYWEwMzhiMjJhMmEwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Reindeer Games","Year":"2000","imdbID":"7.0","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjNmNWIwZTAtMjM1MS00ODNiLTljYzMtNGI1ZmRkMmIxYzJiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Asterix at the Olympic Games","Year":"2008","imdbID":"7,7","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg1MzkwMzg2Ml5BMl5BanBnXkFtZTcwNTg4MzQ4MQ@@._V1_SX300.jpg"},

{"Title":"The Assassination of Jesse James","Year":"2007","imdbID":"tt0443680","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_SX300.jpg"},{"Title":"James and the Giant Peach","Year":"1996","imdbID":"7.8","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTNkNWIwNGUtNTJlOC00NDU3LTk0NWEtNjNjNDM4NzRiNThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"The Incredible Jessica James","Year":"2017","imdbID":"tt5990342","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUxODczMTQ2Ml5BMl5BanBnXkFtZTgwNDI1ODA5MjI@._V1_SX300.jpg"},{"Title":"James White","Year":"2015","imdbID":"8.9","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjE4MzU2NjEwN15BMl5BanBnXkFtZTgwNDQyMDE3NjE@._V1_SX300.jpg"},{"Title":"James Dean","Year":"2001","imdbID":"7.9","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDg2OTdhYmUtYjkwYS00OTE0LWE5MDAtMWY3MDRiMTI5ZGNkXkEyXkFqcGdeQXVyNTE4MzAyNDk@._V1_SX300.jpg"},{"Title":"Jesse James","Year":"1939","imdbID":"5.6","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjViMTUyZGYtZTU4My00OGZkLWE0NTQtYTdkNWI1YzcyZjgzXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SX300.jpg"},{"Title":"Comedy Central Roast of James Franco","Year":"2013","imdbID":"8.0","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2M0ZjU4OTktYzA2Zi00MmM2LWFkNDUtZDZiYzY4ZDI2ZTQyXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg"},{"Title":"The Return of Frank James","Year":"1940","imdbID":"7.9","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmMzZDZlNmYtMjZhMS00OGFiLTkyMjgtODk4YzFhNWM5ODM2XkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg"},{"Title":"Whitey: United States of America v. James","Year":"2014","imdbID":"8.3","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcwNDQ4MTA2OF5BMl5BanBnXkFtZTgwNTc4ODU3MTE@._V1_SX300.jpg"},{"Title":"I Shot Jesse James","Year":"1949","imdbID":"9,0","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGE3OTU3YWYtNjg0NC00ODQzLTk2MGMtNTdiYjZlYjc3NDNjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},

{"Title":"The Gold Rush","Year":"1925","imdbID":"8.2","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Fool's Gold","Year":"2008","imdbID":"8.0","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg3NTQ2MDY4OF5BMl5BanBnXkFtZTcwOTAzMjU1MQ@@._V1_SX300.jpg"},{"Title":"Gold","Year":"2016","imdbID":"7.4","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzI1NjI5OTUyM15BMl5BanBnXkFtZTgwOTM4NzY2MDI@._V1_SX300.jpg"},{"Title":"Woman in Gold","Year":"2015","imdbID":"8.5","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTExMTUxNDQ5MjdeQTJeQWpwZ15BbWU4MDk4NTgxMzQx._V1_SX300.jpg"},{"Title":"Dora and the Lost City of Gold","Year":"2019","imdbID":"7.6","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"},{"Title":"City Slickers II: The Legend of Curly's Gold","Year":"1994","imdbID":"5.9","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjQ3NzM2NjctN2JjMy00M2NmLWJmMGItY2UxYjAzYWFhYmI1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"GOLD","Year":"2018","imdbID":"8.9","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2QwNmIzNzEtMzlhMS00MmU1LWFjZGYtNjc5ZTg3NTE5MWY1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"},{"Title":"Allan Quatermain and the Lost City of Gold","Year":"1986","imdbID":"7.0","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDJiMzA2MzctYzIyYy00NGQ4LWFjMWMtM2RjYmE3MzZmZGJjL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"Mackenna's Gold","Year":"1969","imdbID":"6.9","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjE4NDFmNTctYTBjMy00ZjAwLWI3ZWUtNWU1YzNmZTUyYTkyXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"},{"Title":"St Trinian's 2: The Legend of Fritton's Gold","Year":"2009","imdbID":"7,5","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmFhOTRiODctMjVjOS00ZGIyLWFmM2YtYzhkNDM5NGFkYzcyXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"},
{"Title":"Percy Jackson & the Olympians: The Lightning","Year":"2010","imdbID":"8,9","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ5NDlmZWUtMjIyMC00NzQ3LTg3OWYtMzRkY2FiNzQ0Njc4XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"},{"Title":"The Book Thief","Year":"2013","imdbID":"8,4","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTE3NzkyMjAyNF5BMl5BanBnXkFtZTgwMDc5MTE0MDE@._V1_SX300.jpg"},{"Title":"Identity Thief","Year":"2013","imdbID":"4,3","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY3NzM5MTk2Nl5BMl5BanBnXkFtZTcwMDQ4MjQ3OA@@._V1_SX300.jpg"},{"Title":"To Catch a Thief","Year":"1955","imdbID":"5.9","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODM2ODgyOGYtYzYwMC00ZTEwLTg2MmItZDI2OTdhMTdiMGFiL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"Honest Thief","Year":"2020","imdbID":"6.8","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjEwNjYyMTMtODc5Yi00NTg5LTkwMzAtZTkyOTcyNTFkMGIyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"},{"Title":"The Cook, the Thief, His Wife & Her Lover","Year":"1989","imdbID":"7.3","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTlmM2U5YmQtMTcxYy00MzgyLTkyMDItZjY5Yjc3OTJkMTAzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Thief","Year":"1981","imdbID":"9.2","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmRmNWJjODMtMTdhOC00YTg5LTljNDItMWVmMTFlZTU1MTYxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"The Thief of Bagdad","Year":"1940","imdbID":"9.5","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZWFhYjg4NTEtY2IzMS00YTc2LTg1NGUtMTEzNDBlZDIxZTk3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"},{"Title":"The Good Thief","Year":"2002","imdbID":"tt0281820","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY2NDUyNDM5NV5BMl5BanBnXkFtZTYwODEzNTk5._V1_SX300.jpg"},{"Title":"The Thief of Bagdad","Year":"1924","imdbID":"8.2","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmM0MjdkMDQtMDMwMy00ZjE4LThjMDUtNjA4ZjkxYzM0MWRjXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"},
{"Title":"Fast & Furious 6","Year":"2013","imdbID":"8.0","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"},{"Title":"The Fast and the Furious","Year":"2001","imdbID":"8.5","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Fast Five","Year":"2011","imdbID":"tt1596343","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"},{"Title":"Fast & Furious","Year":"2009","imdbID":"7.9","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"2 Fast 2 Furious","Year":"2003","imdbID":"7.0","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"The Fast and the Furious: Tokyo Drift","Year":"2006","imdbID":"tt0463985","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"},{"Title":"Fast & Furious Presents: Hobbs & Shaw","Year":"2019","imdbID":"8,7","label":"RECOMMENDED","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},{"Title":"F9: The Fast Saga","Year":"2021","imdbID":"7.3","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"},{"Title":"Fast Times at Ridgemont High","Year":"1982","imdbID":"8,4","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"},{"Title":"Fast Food Nation","Year":"2006","imdbID":"4.2","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzM0ODQ5OGItZDZhMy00NDk0LWJmNTgtZGRiMTBjMDI1YTAwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}]}
    s4=s31.Search;
    s1(s4);

var s11;
function s1(s4){
    

    localStorage.setItem("movie",JSON.stringify(s4))

    s11=JSON.parse(localStorage.getItem("movie"));

    s21(s11);
}

function s21(s11){
    
    s11.forEach(function(user){
        var container= document.getElementById("movies")

var div=document.createElement("div");
div.setAttribute("class","div1")

var img=document.createElement("img");
img.setAttribute("class","img1")
img.src=user.Poster;

var t1= document.createElement("t1");
t1.setAttribute("class","t1")
t1.innerHTML=user.Title;

var year= document.createElement("year");
year.setAttribute("class","year")
year.innerHTML=user.Year;

var imdb= document.createElement("imdb");
imdb.setAttribute("class","imdb")
imdb.innerText=user.imdbID;

if(user.label!=null){
var label= document.createElement("label");
label.setAttribute("class","label1")
label.innerHTML=user.label;


div.append(img,t1,year,imdb,label);
}
else{
    div.append(img,t1,year,imdb);
}
container.append(div);
});

};


var count=2;
function dark()
{ count++;
if(count%2==0)
{
    document.getElementById("body").style.color = "white";
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
}
else{
    document.getElementById("body").style.color = "black";
    document.getElementById("body").style.backgroundColor = "white";
   
}
}