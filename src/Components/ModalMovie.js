import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import { Modal } from "bootstrap";


export default function ModalMovie(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={`http://image.tmdb.org/t/p/w500/${props.chosenMovie.vote_average}`} width={464} alt='movie'/>
          {/* <p>{props.chosenMovie.posterPath}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
          add to the favorite list
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}