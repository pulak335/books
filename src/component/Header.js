
import React,{useState} from 'react'
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import Addbookform from './Addbookform';

const Header = () => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

  return (
    <>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Bookmark Manager</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="success" onClick={handleShow}>Add Bookmark</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add a new book</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Addbookform handleClose={handleClose}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>

    </Modal.Footer>
  </Modal>
    </>

  )
}

export default Header;