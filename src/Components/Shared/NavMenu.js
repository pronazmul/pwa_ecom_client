import { faBell, faCartPlus, faHeart, faSearch, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Button, Col, Container, FormControl, InputGroup, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'

const NavMenu = () => {
    return (
        <>
            <Navbar fixed={'top'} bg="light">
                <Container fluid={true}>
                    <Row className='w-100'>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12} className='d-flex flex-row align-items-center'>
                            <Navbar.Brand><img height='35' src={logo} alt='' /></Navbar.Brand>
                            <Badge pill className='badge-color py-2 px-3 ml-3'>
                                Primary <FontAwesomeIcon icon={faCartPlus} />
                            </Badge>
                        </Col>

                        <Col xl={4} lg={4} md={4} sm={12} xs={12} className='d-flex flex-row justify-content-end align-items-center'>
                            <InputGroup>
                                <FormControl/>
                                <InputGroup.Append>
                                    <Button style={{backgroundColor:'#E43023'}}><FontAwesomeIcon icon={faSearch}/> </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>

                        <Col xl={4} lg={4} md={4} sm={12} xs={12} className='d-flex flex-row justify-content-end align-items-center'>
                            <Link to='' className='text-decoration-none'><FontAwesomeIcon icon={faHeart} size='lg' className='text-dark'/> <sup><Badge pill className='badge-color'>4</Badge></sup> </Link>
                            <Link to='' className='mx-3 text-decoration-none'><FontAwesomeIcon icon={faBell} size='lg' className='text-dark'/> <sup><Badge pill className='badge-color'>4</Badge></sup> </Link>
                            <Link to='' className='mx-3 font-weight-bolder text-dark text-decoration-none '>Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default NavMenu