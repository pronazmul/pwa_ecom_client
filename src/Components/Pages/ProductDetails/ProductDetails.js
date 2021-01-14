import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Form, Row } from 'react-bootstrap'
import NavMenu from '../../Shared/NavMenu'
import Footer from '../../Shared/Footer/Footer'
import img1 from '../../../Assets/Images/details1.jpg'
import img2 from '../../../Assets/Images/details2.jpg'
import img3 from '../../../Assets/Images/details3.png'
import img4 from '../../../Assets/Images/details4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFirstOrder } from '@fortawesome/free-brands-svg-icons'

const ProductDetails = () => {
    document.title = 'Product Details'
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const [image, setImage] = useState(img1)
    return (
        <>
            <NavMenu />
            <Container style={{ marginTop: '75px' }} >
                <Card>
                    <Card.Body>
                        <Row>

                            <Col xl={6} lg={6} md={6} sm={12} xs={12} className='pr-4'>
                                <Row className='w-75 ml-auto'>
                                    <img src={image} alt='' className='w-100 rounded' />
                                </Row>
                                <Row className='mt-3 w-75 ml-auto'>
                                    <Col xl={3} lg={3} md={3} sm={3} xs={3} className='p-0 m-0 grow-up-image'>
                                        <img onClick={() => setImage(img1)} src={img1} alt='' className='w-100' />
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={3} xs={3} className='p-0 m-0 grow-up-image'>
                                        <img onClick={() => setImage(img2)} src={img2} alt='' className='w-100' />
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={3} xs={3} className='p-0 m-0 grow-up-image'>
                                        <img onClick={() => setImage(img3)} src={img3} alt='' className='w-100' />
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={3} xs={3} className='p-0 m-0 grow-up-image'>
                                        <img onClick={() => setImage(img4)} src={img4} alt='' className='w-100' />
                                    </Col>
                                </Row>
                                <Row className='mt-3 w-75 ml-auto'>
                                    <p className='card-title text-dark text-left'>Details</p>
                                    <p className='footer-text text-justify'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet.</p>
                                </Row>
                            </Col>

                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Row className='w-75 mr-auto'>
                                    <p className='card-title text-dark text-left'>
                                        Dezeen 10 most forward-thinking brands for women
                                </p>
                                    <p className='footer-text text-justify'>Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive CollectioSome Of Our Exclusive Collection, You May Like Some Of Our Exclusive Collectio</p>
                                </Row>
                                <Row className='mr-auto w-100'>
                                    <Col className='footer-text font-weight-bold p-0 m-0 border-right border-warning ' md={3}>
                                        Regular Price 200
                                    </Col>
                                    <Col className='footer-text font-weight-bold pl-3 m-0 border-right border-warning' md={3}>
                                        50% Discount
                                    </Col>
                                    <Col className='footer-text font-weight-bold pl-3 m-0' md={3}>
                                        New Price 100
                                    </Col>
                                </Row>
                                <Row className='w-75 mr-auto mt-3'>
                                    <p className='card-title text-dark mb-1 text-left  '>Choose Color</p>
                                    <Form className='w-100 ml-3'>
                                        <Form.Group as={Row} className=''>
                                            <Form.Check inline
                                                type="radio"
                                                label="Black"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check inline
                                                type="radio"
                                                label="Green"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check inline
                                                type="radio"
                                                label="Red"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                        </Form.Group>
                                    </Form>
                                </Row>

                                <Row className='w-75 mr-auto'>
                                    <p className='card-title text-dark mb-1 text-left  '>Choose Size</p>
                                    <Form className='w-100 ml-3'>
                                        <Form.Group as={Row} className=''>
                                            <Form.Check inline
                                                type="radio"
                                                label="X"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check inline
                                                type="radio"
                                                label="XX"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check inline
                                                type="radio"
                                                label="XXX"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                        </Form.Group>
                                    </Form>
                                </Row>

                                <Row className='w-75 mr-auto'>
                                    <p className='card-title text-dark mb-1 text-left  '>Quantity</p>
                                    <Form className='w-100'>
                                        <Form.Control className='w-50 d-block' type="number" />
                                    </Form>

                                    <ButtonGroup className='mt-3' aria-label="Basic example">
                                        <Button variant="danger"><FontAwesomeIcon icon={faCartPlus} size='1x'/> Add To Cart</Button>
                                        <Button variant="primary"><FontAwesomeIcon icon={faFirstOrder} size='1x'/> Order Now</Button>
                                        <Button variant="success"><FontAwesomeIcon icon={faHeart} size='1x'/> Fevourite</Button>
                                    </ButtonGroup>
                                </Row>

                                <Row className='w-75 mt-4 mr-auto'>
                                    <h5 className='card-title text-dark mb-4'>
                                        Reviews </h5>

                                    <h5 className='w-100 text-dark'>Pro Nazmul <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></h5>
                                    <p className='footer-text text-justify'>Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive CollectioSome Of Our Exclusive Collection, You May Like Some Of Our Exclusive Collectio</p>
                                </Row>


                            </Col>

                        </Row>

                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </>

    )
}

export default ProductDetails