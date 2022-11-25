import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Burger from "./burger.png"


function ReactBootstrap() {
    return <>

        <div className="navbar" style={{ margin: "0px", padding: "0px" }}>
            <Navbar bg="warning" expand="lg" className='w-100'>
                <Container>
                    <Navbar.Brand href="#home">Burger Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

        <div className="bannerCard" style={{ height: '350px'}}>
            <Card>
                <Card.Img variant="top" src={Burger}  style={{ height: '350px'}} />
            </Card>
        </div>
    </>
}
export default ReactBootstrap;