import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';


const Modal1 = ({children, close, save, type, action, btnType})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className={btnType} onClick={handleShow}>
        {type}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {close}
          </Button>
          <Button variant="primary" onClick={action}>
            {save}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;