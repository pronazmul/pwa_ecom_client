import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MainSlider from './MainSlider'
import MegaMenu from './MegaMenu'

const HomeTop = () => {
    return (
        <>
            <Container fluid={true} style={{marginTop:'75px'}}>
                <Row>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} className='p-0 m-0 responsive-megamenu'><MegaMenu/></Col>
                    <Col xl={9} lg={9} md={9} sm={12} xs={12} className='p-0 m-0'><MainSlider/></Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeTop