import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {

    const { user } = useContext(AuthContext);


    return (
        <Container className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-black' to="/category/0">Home</Link>
                            <Link className='text-decoration-none text-black ms-3' to="/">News</Link>
                            <Link className='text-decoration-none text-black ms-3' to="/">Advertise</Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <p className='d-flex align-items-center mb-0'>User Have</p> :
                                    <FaUserCircle className='mt-1' style={{ fontSize: '2rem', color: 'black' }}></FaUserCircle>
                            }

                            {
                                user ? <Button className='ms-2' variant="dark">Logout</Button> : <Link to="/login"><Button className='ms-2'  variant="dark">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;