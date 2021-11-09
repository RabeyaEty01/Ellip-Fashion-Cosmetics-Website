import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png';

import './Header.css';


const Header = () => {
    //const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className="navbar-header"  collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Brand href="#home">
                        <img className="justify-content-start img-fluid"  src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="text-dark fw-bold" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={HashLink} to="/explore#explore">Explore More</Nav.Link>
                        

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;