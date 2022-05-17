import { useState,useEffect} from "react";
import MovieList from "./MovieList"; 
// import Cards from "./Cards"

export default function Home() {
  const [trending, setTrending] = useState([]);

  async function getTrending() {
    let url = process.env.REACT_APP_SERVER;
  //  let url = "https://recipes-py02.herokuapp.com";
    console.log("1,url", url);
    let response = await fetch(`${url}/trending`);
    // console.log("2,response", response);

    let trendingData = await response.json();
     console.log("3,trendingData", trendingData);
    setTrending(trendingData);
    // console.log("states",recipes);
  }

  function updateMovie(newMovie, id) {
    console.log("newMovie", newMovie, id);
    let updatedMovie = trending.map(movie => {
      if (movie.id === id) {
        movie.comment = newMovie.userComment;
        return movie;
      } else {
        return movie;
      }
    })
    setTrending(updatedMovie);
   }

  useEffect(() => {
    getTrending();
  }, []);


  return (
    <>
      <h1>Home Page</h1>
      {
        (trending.length>0)&& <MovieList trending={trending}
         updateMovie={updateMovie}
          />
      }
    </>
  );
}

