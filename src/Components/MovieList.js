import Movie from "./Movie";
import './MovieList.css'
import { Container } from "react-bootstrap";

export default function MovieList(props) {
  return (
    <>

      return (
      <Container fluid className="main-container">
        <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
          {props.trending.map((movie) => {
            return (

              <Movie
                key={movie.id}
                movie={movie}
                updateMovie={props.updateMovie}
              />

            );
          })}
        </div>
      </Container>
      );


    </>

  )
}