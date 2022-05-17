import { useState, useEffect } from "react";
// import "./cards.css";
import {Card,Button } from "react-bootstrap";
export default function FavList() {
    const [favMovies, setMovies]= useState()

   async function getFavMovies() {
        let url = `${process.env.REACT_APP_SERVER}/getMovies`;
       let response = await fetch(url, {
           method: "GET",
       });
       console.log("response=>",response)
       let favMovies = await response.json();
       setMovies(favMovies);
       console.log("3,favMovies=>",favMovies)

       
    }



    async function handleDelete(id) {
    
        let url = `${process.env.REACT_APP_SERVER}/DELETE/${id}`;
        let response = await fetch(url, {
            method: "DELETE",
        });
        if(response.status==204){
            getFavMovies();
           alert(" movie deleted successfully")
        }        
    }
    useEffect(() => {
        getFavMovies();

    }, []);

    return (
      <>
        <h1>Favourite Movies Page</h1>
            {favMovies && favMovies.map((movie) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500/${movie.poster}`} />
                    <Card.Body className="cardBody">
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text className="scrollBar">
                        {movie.rate}
                      </Card.Text>
                      <Card.Text >
                        {movie.comment}
                      </Card.Text>
                      <Card.Text>{movie.release_date}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleDelete(movie.id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                );
            })
            }
    </>
    );
}

  