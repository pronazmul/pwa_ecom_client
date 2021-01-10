import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <Jumbotron className='animate__animated animate__fadeInDown'>
                <h2>I am From Login Page</h2>
                <Link className='btn btn-outline-success' to="/">Home Page</Link>
            </Jumbotron>

            <Container>
                    <h1 className='responsive-header'>This is Responsive Header</h1>
            </Container>
        </>
    );
};

export default LoginPage;