import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Route,
    Link,
    Routes,
    BrowserRouter
} from "react-router-dom";
import Term from './pages/Term'
import Home from './pages/Home'
import Experience from './pages/Experience';
import Project from './pages/Project';

function NavBar() {
    return (
        <BrowserRouter>
        <><Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/term">Term</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            
        <Routes>
            <Route path="/" element={<Home />}></Route>        
                    <Route path="/term" element={<Term />}></Route>
                    <Route path="/projects" element={<Project />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
        </Routes></>
            
        </BrowserRouter>
    );
}

export default NavBar;