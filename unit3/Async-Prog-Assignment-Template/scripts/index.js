var x=[
        "https://media.istockphoto.com/photos/rocky-mountains-and-autumnal-forest-with-colorful-trees-high-mountain-picture-id1282522992?b=1&k=20&m=1282522992&s=170667a&w=0&h=W_7cRAwDTWOqqXF3g9zwOaCMgol1-Vb4rYtlqBbJMYE=",
        "https://media.istockphoto.com/photos/death-valley-picture-id1296441088?b=1&k=20&m=1296441088&s=170667a&w=0&h=-VLjm-BqLNer-UyRIey0VMTw0PQhFKCg4ZPZiEJ2Qz0=",
        "https://media.istockphoto.com/photos/brecon-beacons-landscape-picture-id1308867983?b=1&k=20&m=1308867983&s=170667a&w=0&h=leXvVFQe-WIkLrCre4ra77ooXYVZL3kqlbOAehER1Ls=",
        "https://media.istockphoto.com/photos/aerial-photograph-rural-landscape-farms-villages-picturesque-green-picture-id1292399669?b=1&k=20&m=1292399669&s=170667a&w=0&h=LQAbbZdgZVPntMvwUvMBwTuJkIU7JF6XP4sGe-Mq4o0=",
        "https://media.istockphoto.com/photos/aerial-view-of-lake-tahoe-shoreline-with-mountains-and-turquoise-blue-picture-id1302742624?b=1&k=20&m=1302742624&s=170667a&w=0&h=10t9qpPCwQ2JIb4N9pA04OWlff7TP8McxSxtqQkcCYM=",
        "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
        "https://media.istockphoto.com/photos/sonoran-sunset-picture-id1296913338?b=1&k=20&m=1296913338&s=170667a&w=0&h=0VsLoorG-mWXPTEa8lvOadLy1-s5aVo7FWj4ZSBm-Rw=",
        "https://images.unsplash.com/photo-1422466654108-5e533f591881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
    ]
        var a=0
        setInterval(function ha(){
            if(a==x.length){
                a=0
            } 
            var hars=document.getElementById("hars");
            hars.src=x[a];
            
            a=a+1;
        
        },1000)


        var movies=[{
            "link":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-",
            "name":"The Shawshank Redemption",
            "release date":"21 July 1994",
            "IMDB":"9.5✰"},
            {
                "link":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-p1vR1-APAAZwcTQBBfAuXYHSFll9z6W2fK5-v8DhGVLJHR1h",
                "name":"The Good, the Bad and the Ugly",
                "release date":"21 Feb 1966",
                "IMDB":"9.3✰"},
                {
                    "link":"https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_.jpg",
                    "name":"Harry Potter order of pheonix",
                    "release date":"19 Feb 2007",
                    "IMDB":"7.8✰"},
                    {
                        "link":"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
                        "name":"Harry potter sorcers stone",
                        "release date":"21 Feb 2001",
                        "IMDB":"8.0✰"},
                        {
                            "link":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
                            "name":"The Lord of the Rings",
                            "release date":"24 Apr 2003",
                            "IMDB":"8.9✰"},
                            {
                                "link":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuhFZT3lQfr0vDy4XWMHQ8X93FWuamEuw_5iB4dmOTxc_w79rA",
                                "name":"12 Angry Men",
                                "release date":"21 Dec 1957",
                                "IMDB":"8.5✰"},
                                {
                                    "link":"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
                                    "name":"The Dark Knight Rises",
                                    "release date":"21 Oct 2012",
                                    "IMDB":"8.4✰"},
                                    {
                                        "link":"https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",
                                        "name":"The Dark Knight",
                                        "release date":"13 Jan 2008",
                                        "IMDB":"9.0✰"},
                                        {
                                            "link":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg","name":"The Godfather",
   "release date":"14 Aug 1972","IMDB":"9.2✰"
}];
sorthl();
function sorti(value){
    if(value==2)
    {
        movies=[{
            "link":"https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_.jpg",
            "name":"Harry Potter order of pheonix",
            "release date":"19 Feb 2007",
            "IMDB":"7.8✰"},
            {
                "link":"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
                "name":"Harry potter sorcers stone",
                "release date":"21 Feb 2001",
                "IMDB":"8.0✰"},
    
                {
                    "link":"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
                    "name":"The Dark Knight Rises",
                    "release date":"21 Oct 2012",
                    "IMDB":"8.4✰"},
                {
                    "link":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuhFZT3lQfr0vDy4XWMHQ8X93FWuamEuw_5iB4dmOTxc_w79rA",
                    "name":"12 Angry Men",
                    "release date":"21 Dec 1957",
                    "IMDB":"8.5✰"},                {
                        "link":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
                        "name":"The Lord of the Rings",
                        "release date":"24 Apr 2003",
                        "IMDB":"8.9✰"},
                        {
                            "link":"https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",
                            "name":"The Dark Knight",
                            "release date":"13 Jan 2008",
                            "IMDB":"9.0✰"},
                            {
                                "link":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg","name":"The Godfather",
    "release date":"14 Aug 1972","IMDB":"9.2✰"
    },
    {
        "link":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-p1vR1-APAAZwcTQBBfAuXYHSFll9z6W2fK5-v8DhGVLJHR1h",
        "name":"The Good, the Bad and the Ugly",
        "release date":"21 Feb 1966",
        "IMDB":"9.3✰"},{
            "link":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-",
            "name":"The Shawshank Redemption",
            "release date":"21 July 1994",
            "IMDB":"9.5✰"},
    ];
   
    }
    else if(value==1)
    {
        movies=[
            {
                "link":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-",
                "name":"The Shawshank Redemption",
                "release date":"21 July 1994",
                "IMDB":"9.5✰"},
            {
                "link":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-p1vR1-APAAZwcTQBBfAuXYHSFll9z6W2fK5-v8DhGVLJHR1h",
                "name":"The Good, the Bad and the Ugly",
                "release date":"21 Feb 1966",
                "IMDB":"9.3✰"},
            {
                "link":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg","name":"The Godfather",
"release date":"14 Aug 1972","IMDB":"9.2✰"
},

            {
                "link":"https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",
                "name":"The Dark Knight",
                "release date":"13 Jan 2008",
                "IMDB":"9.0✰"},
            {
                "link":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
                "name":"The Lord of the Rings",
                "release date":"24 Apr 2003",
                "IMDB":"8.9✰"},
            {
                "link":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuhFZT3lQfr0vDy4XWMHQ8X93FWuamEuw_5iB4dmOTxc_w79rA",
                "name":"12 Angry Men",
                "release date":"21 Dec 1957",
                "IMDB":"8.5✰"},  
            {
                "link":"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
                "name":"The Dark Knight Rises",
                "release date":"21 Oct 2012",
                "IMDB":"8.4✰"},
            {
            "link":"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
            "name":"Harry potter sorcers stone",
            "release date":"21 Feb 2001",
            "IMDB":"8.0✰"},
            {
                "link":"https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_.jpg",
                "name":"Harry Potter order of pheonix",
                "release date":"19 Feb 2007",
                "IMDB":"7.8✰"}];
    }
    sorthl();
    }

function sorthl(){
localStorage.clear();
localStorage.setItem("movies",JSON.stringify(movies))
movies=JSON.parse(localStorage.getItem("movies"))
var i=0;
var harsu=Object.values(movies[i]);
                    
      
        {
            document.getElementById("smallm1").src=harsu[0]
            document.getElementById("mname").innerHTML=harsu[1]
            document.getElementById("relm").textContent=harsu[2]
            document.getElementById("imm").innerHTML=harsu[3]


        }i++;
        harsu=Object.values(movies[i]);
        {
        document.getElementById("smallm2").src=harsu[0]
        document.getElementById("mname1").innerHTML=harsu[1]
            document.getElementById("relm1").textContent=harsu[2]
            document.getElementById("imm1").innerHTML=harsu[3]
    }
    i++;
        harsu=Object.values(movies[i]);
    {
        document.getElementById("smallm3").src=harsu[0]
        document.getElementById("mname2").innerHTML=harsu[1]
            document.getElementById("relm2").textContent=harsu[2]
            document.getElementById("imm2").innerHTML=harsu[3]
    } 
    i++;
    harsu=Object.values(movies[i]);
    {
        document.getElementById("smallm4").src=harsu[0]
        document.getElementById("mname4").innerHTML=harsu[1]
            document.getElementById("relm4").textContent=harsu[2]
            document.getElementById("imm4").innerHTML=harsu[3]

    }
    i++;
    harsu=Object.values(movies[i]);
{
    document.getElementById("smallm5").src=harsu[0]
    document.getElementById("mname5").innerHTML=harsu[1]
            document.getElementById("relm5").textContent=harsu[2]
            document.getElementById("imm5").innerHTML=harsu[3]

}    
i++;
        harsu=Object.values(movies[i]);
    {
        document.getElementById("smallm6").src=harsu[0]
        document.getElementById("mname6").innerHTML=harsu[1]
            document.getElementById("relm6").textContent=harsu[2]
            document.getElementById("imm6").innerHTML=harsu[3]

    }      
    i++;
    harsu=Object.values(movies[i]); 
        {
            document.getElementById("smallm7").src=harsu[0]
            document.getElementById("mname7").innerHTML=harsu[1]
            document.getElementById("relm7").textContent=harsu[2]
            document.getElementById("imm7").innerHTML=harsu[3]


        }  
        i++;
        harsu=Object.values(movies[i]);
        {
            document.getElementById("smallm8").src=harsu[0]
            document.getElementById("mname8").innerHTML=harsu[1]
            document.getElementById("relm8").textContent=harsu[2]
            document.getElementById("imm8").innerHTML=harsu[3]

        }
        i++;
        harsu=Object.values(movies[i]);
        {
          document.getElementById("smallm9").src=harsu[0]
          document.getElementById("mname9").innerHTML=harsu[1]
            document.getElementById("relm9").textContent=harsu[2]
            document.getElementById("imm9").innerHTML=harsu[3]
      
        }
    }

    
    