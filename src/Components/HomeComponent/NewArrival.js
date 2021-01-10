import React from 'react'
import { Card, Container} from 'react-bootstrap'
import image from '../../Assets/Images/setwet.jpg'

import Slider from "react-slick"

const NewArrival = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <Container fluid={true} className='py-3'>
                <h1 className='section-title'>New Arrival</h1>
                <p className='section-subtitle'>Some Of Our Exclusive Collection, You May Like</p>

                <Slider {...settings}>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow rounded">
                            <Card.Img className='w-75' src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </Container>


        </>
    )
}

export default NewArrival