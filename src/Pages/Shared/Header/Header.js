import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className="navbar-header" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Brand href="#home">
                        <img className="justify-content-start img-fluid" src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="text-dark fw-bold" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={HashLink} to="/explore#explore">Explore More</Nav.Link>

                        {user.email &&
                            <>
                                <Nav.Link className="text-dark fw-bold" as={HashLink} to="/dashboard">Dashboard</Nav.Link>

                                <Navbar.Text>
                                    <small className="text-dark">Signed in as:</small>
                                    <span className="text-primary"> {user.displayName}</span>
                                </Navbar.Text>
                            </>
                        }
                        {
                            user.email ?
                                <Nav.Link >
                                    <Button onClick={logOut} variant=" bg-danger rounded-pill px-4 text-white fw-bold"> <i className="fa fa-sign-out text-white"></i> Logout</Button>
                                </Nav.Link>

                                :
                                <>
                                    <Nav.Link as={HashLink} to="/login">
                                        <Button variant=" btn-sign rounded-pill px-4 fw-bold text-white"><i className="fas fa-sign-in-alt text-white"></i> Sign In</Button>
                                    </Nav.Link>

                                    <Nav.Link as={HashLink} to="/register">
                                        <Button variant=" btn-sign rounded-pill px-4 text-white fw-bold"><i className="fas fa-sign-in-alt text-white"></i> Sign Up</Button>
                                    </Nav.Link>
                                </>

                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;