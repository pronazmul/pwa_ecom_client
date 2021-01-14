import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import image from '../../../Assets/Images/slide1.png'
import NavMenu from '../../Shared/NavMenu'
import Footer from '../../Shared/Footer/Footer'

const UserOnBoardPage = () => {
    document.title='User Login'    
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <NavMenu />
            <Container style={{ marginTop: '75px' }}>
                <Card className='w-75 mx-auto'>
                    <Card.Body>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12} className='d-flex align-items-center'>

                                <Form className='w-100 text-center section-subtitle'>
                                    <p className='section-title'>User Sign In</p>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Please Enter Your Mobile No, And Go Next</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile Number" />
                                        <Button className='btn-block btn btn-danger mt-3'>Next</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <img src={image} alt='' className='rounded' style={{ width: '100%' }} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </>

    )
}

export default UserOnBoardPage