import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import playstore from '../../../Assets/Images/playstore.png'
import apple from '../../../Assets/Images/apple.png'

const Footer = () => {
    return (
        <>
            <Container fluid={true}>
                <Row className='my-5'>
                    <Container>
                        <Row>
                            <Col xl={3} lg={6} md={3} sm={6} xs={12}>
                                <p className='footer-header'>About Company</p>
                                <p className='footer-text'>on the left are linked together and the changes are reflected in the other one as you type</p>
                                <p className='footer-header'>Social Link</p>
                                <Link to=''><FontAwesomeIcon size='2x' className='text-decoration-none text-dark mr-2' icon={faFacebook} /></Link>
                                <Link to=''><FontAwesomeIcon size='2x' className='text-decoration-none text-dark mr-2' icon={faInstagram} /></Link>
                                <Link to=''><FontAwesomeIcon size='2x' className='text-decoration-none text-dark mr-2' icon={faTwitter} /></Link>

                            </Col>
                            <Col xl={3} lg={6} md={3} sm={6} xs={12}>
                                <p className='footer-header'>The Company</p>
                                <p className='footer-text'>About Us <br /> Contract Us</p>
                                <p className='footer-header'>Office Address</p>
                                <p className='footer-text'>on the left are linked together and the changes are reflected in the other one as you type</p>
                            </Col>
                            <Col xl={3} lg={6} md={3} sm={6} xs={12}>
                                <p className='footer-header'>More Info</p>
                                <p className='footer-text'>How to pourchase <br /> Return Policy <br /> Privacy Policy</p>
                            </Col>
                            <Col xl={3} lg={6} md={3} sm={6} xs={12}>

                                <p className='footer-header'>Download App</p>
                                <img className='mb-2' src={playstore} alt=''/>
                                <img src={apple} alt=''/>

                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row className='bg-secondary py-3 text-light footer-text text-center'>
                    <Container>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    </Container>
                </Row>
            </Container>
        </>
    )
}

export default Footer