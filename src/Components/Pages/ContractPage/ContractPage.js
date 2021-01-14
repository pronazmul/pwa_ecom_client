import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import image from '../../../Assets/Images/slide1.png'
import NavMenu from '../../Shared/NavMenu'
import Footer from '../../Shared/Footer/Footer'

const ContractPage = () => {
    document.title='Contract Us'    
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

                                <Form className='w-100'>
                                    <p className='section-title'>Contract Us</p>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile Number" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email Address" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your Message</Form.Label>
                                        <Form.Control type="text" placeholder="Your Message Here" />
                                    </Form.Group>
                                    
                                    <Button className='btn-block btn btn-danger mt-3'>Send Message</Button>
                                </Form>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='d-flex align-items-center'>
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

export default ContractPage