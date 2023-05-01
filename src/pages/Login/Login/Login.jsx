import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{height: '100vh', backgroundColor: '#F1F1F1'}}>
            <Container className='mx-auto w-25 p-4' style={{backgroundColor: '#FFFFFF'}}>
                <h3>Please Login</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-100' variant="dark" type="submit">
                        Login
                    </Button><br />

                    <Form.Text className="text-secondary">
                        Don't Have an account? <Link className='text-decoration-none text-danger' to='/register'>Register</Link>
                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>

                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;