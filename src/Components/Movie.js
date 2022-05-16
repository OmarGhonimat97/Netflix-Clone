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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.movie.vote_average} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>{props.movie.posterPath}</Card.Text>
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
        //   movie={props.movie}
          />
        }
      </>
    );
}

