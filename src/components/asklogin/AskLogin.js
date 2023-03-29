import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AskLogin.css";

export default function AskLogin({ show, onHide }) {
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        centered
        className="Askmodal-contanier"
      >
        <Modal.Header closeButton className="AskModal">
          <Modal.Title>
            WELCOME TO OUR ARENA YOU ARE ONE STEP BEHIND TO DO THIS{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="AskContent">
          Woohoo, You Need to login to access this !!!!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
