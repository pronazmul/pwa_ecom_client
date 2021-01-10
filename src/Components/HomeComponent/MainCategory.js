import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import image from '../../Assets/Images/jog.jpg'

const MainCategory = () => {
    return (
        <>
            <Container fluid={true} className='py-5'>
                <h1 className='section-title'>Category</h1>
                <p className='section-subtitle'>Some Of Our Exclusive Collection, You May Like</p>
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Row>

                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Row>

                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6} xs={6} className='py-1 px-1'>
                                <Card className="shadow rounded">
                                    <Card.Img height='110' src={image} />
                                    <Card.Body className='text-center'>
                                        <p className='card-title'>Category</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default MainCategory