import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import image from '../../Assets/Images/router.png'

const SpecialCollection = () => {
    return (
        <>
            <Container fluid={true} className='py-3'>
                <h1 className='section-title'>Special Collection</h1>
                <p className='section-subtitle'>Some Of Our Exclusive Collection, You May Like</p>
                <Row>

                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default SpecialCollection