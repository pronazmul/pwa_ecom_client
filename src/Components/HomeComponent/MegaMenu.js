import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
    return (
        <div className='mega-menu-container'>
            <Accordion style={{direction:'ltr'}}>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="0">
                    Menu 1
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="1">
                    Menu 2
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="3">
                    Menu 3
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="4">
                    Menu 4
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="5">
                    Menu 5
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="6">
                    Menu 6
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="7">
                    Menu 7
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="8">
                    Menu 8
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="9">
                    Menu 9
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>
                <Accordion.Toggle className='d-block w-100 btn rounded-0 py-2 mega-button border d-flex flex-row justify-content-between ' eventKey="10">
                    Menu 10
                <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                    <ListGroup>
                        <ListGroup.Item><Link>Link 1</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 2</Link></ListGroup.Item>
                        <ListGroup.Item><Link>Link 3</Link></ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>



            </Accordion>
        </div>

    );
};



export default MegaMenu;