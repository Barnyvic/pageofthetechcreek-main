import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../Form/form";

const Modalpage = ({ handleModal, show }) => {
  return (
    <Modal show={show} onHide={handleModal}>
      <Modal.Header closeButton>
        <div className="Form-header">
          <h5>ICT & Digital Literacy Training</h5>
        </div>
      </Modal.Header>
      <Form />
    </Modal>
  );
};

export default Modalpage;
