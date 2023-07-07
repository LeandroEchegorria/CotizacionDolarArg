

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="black" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://res.cloudinary.com/ddylqd7fx/image/upload/v1684597523/LeadCode/LeadCode_logoblack_w1vzxx.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            LeadCode
            </Navbar.Brand>
        </Container>
    </Navbar>

  );
}

export default NavBar;