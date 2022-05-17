import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalMovie from "./ModalMovie";

export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie,setchosenMovie] = useState();
    
  const handleShow = (movie) => {
    setShow(true);
    setchosenMovie(movie)
    
    }

      const handleClose = () => setShow(false);
    return (
      <>
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            marginTop: "3rem",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500/${props.movie.vote_average}`} />
          <Card.Body className="cardBody">
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text className="scrollBar">{props.movie.posterPath}</Card.Text>
            <Card.Text>Release Date:{props.movie.release_date}</Card.Text> 
           <Button variant="primary"
           onClick={() => {
            handleShow(props.movie);
          }}
           >Show Details</Button>
            </Card.Body>
        </Card>
        {chosenMovie &&
        <ModalMovie
            show={show}
            handleClose={handleClose}
            chosenMovie={chosenMovie}
            updateMovie={props.updateMovie}
        //   movie={props.movie}
          />
        }
      </>
    );
}

