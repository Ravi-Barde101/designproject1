import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import "./navbar.css";

function Navbar(){
    return(
 <>
 <Container fluid className="navbar-section">
    <Row className="navbar-section1">
        <Col lg={10} className="navbar-left">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="">contact</Nav.Link>
                </Nav.Item>
            </Nav>
    </Col>
    <Col lg={2} className="navbar-right">
           <Nav>
                <Nav.Item>
                    <Nav.Link href="/home">Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="">Sign Up</Nav.Link>
                </Nav.Item>
         </Nav>     
    </Col>
    </Row>
</Container>
 </>
    );
}
export default Navbar;