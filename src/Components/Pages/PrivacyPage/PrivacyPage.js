import React, { useEffect } from 'react'
import { Card, Container, ListGroup, ListGroupItem} from 'react-bootstrap'
import NavMenu from '../../Shared/NavMenu'
import Footer from '../../Shared/Footer/Footer'

const PrivacyPage = () => {
    document.title = 'Privacy Policy'    
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <NavMenu />
            <Container style={{ marginTop: '75px' }}>
                <Card>
                    <Card.Body >
                    <h1 className='section-title text-left my-3'>Privacy Policy</h1>
                    <p className='footer-text'>It has been exactly 3 years since I wrote my first blog series entitled “Flavorful Tuscany”, but starting it was definitely not easy. Back then, I didn’t know much about blogging, let alone think that one day it could become my full-time job. Even though I had many recipes and food-related stories to tell, it never crossed my mind that I could be sharing them with the whole world.</p>

                    <p className='footer-text'>I am now a full-time blogger and the curator of the Simply delicious newsletter, sharing stories about traveling and cooking, as well as tips on how to run a successful blog.</p>

                    <p className='footer-text font-weight-bolder'>If you are tempted by the idea of creating your own blog, please think about the following:</p>

                    <ListGroup variant="flush" className='footer-text'>
                        <ListGroupItem>Your story (what do you want to tell your audience)</ListGroupItem>
                        <ListGroupItem>Your audience (who do you write for)</ListGroupItem>
                        <ListGroupItem>Your blog name and design</ListGroupItem>
                    </ListGroup>

                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </>

    )
}

export default PrivacyPage