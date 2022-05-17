import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef} from "react"; 
// import { Modal } from "bootstrap";


export default function ModalMovie(props) {

  let commentRef = useRef()
  function handleComment(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log(userComment);
    // let newMovie = { ...props.choosenCard, comment: userComment }
    let newMovie= { ...props.chosenMovie, userComment };
    

    props.updateMovie(newMovie, newMovie.id);
    // console.log("result is ",props.choosenCard)

  }

  async function handleAddToFav(e, movie) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/addMovie`;
    let data = {
      title: movie.title ,
      rate:movie.release_date ,
      poster:movie.vote_average ,
      userComment:movie.comment,
    };
    console.log("1,data", data);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    })

    let addedmovie = await response.json();
    console.log("2,addedmovie", addedmovie);


 

  }


  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={`http://image.tmdb.org/t/p/w500/${props.chosenMovie.vote_average}`} width={464} alt='movie'/>
          <br />
          <p>
            {props.chosenMovie.comment
              ? props.chosenMovie.comment
              : "No comment added"}
          </p>
          <p>{props.chosenMovie.posterPath.substring(0, 200)}</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Enter Comment"
              />
              <Form.Text className="text-muted">add your own comment</Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleComment(e)}
            >
              Submit comment
            </Button>
            </Form>
          {/* <p>{props.chosenMovie.posterPath}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleAddToFav(e, props.chosenMovie)}
            >
              Add to favorite
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}