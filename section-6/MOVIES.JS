const movies = [
    {title: 'a',year: 2018,rating: 4.5},
    {title: 'b',year: 2018,rating: 4.7},
    {title: 'c',year: 2018,rating: 3},
    {title: 'd',year: 2017,rating: 4.5},

]

function order(movies){
    const movie = 
        movies
            .filter((movie)=>{
            if(movie.rating>4 && movie.year>=2018) return movie;
            })
            .sort((a,b)=>{
                if(a.rating>b.rating) return -1;
                if(a.rating<b.rating) return 1;
                return 0; 
                // or return a.rating-b.rating;
            })
            .map((movie)=>{
                return movie.title;
            })

    console.log(movie);


}

order(movies);