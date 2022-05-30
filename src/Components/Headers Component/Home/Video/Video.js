import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Video = () => {
    return (
        <div className='pb-5 mb-5 mt-4'>
            <h1 className='text-center mb-3'>Our Warehouse</h1>
            <Container>
                <Row>
                    <Col className='mx-5 d-flex align-items-center'><h4>In this section you can see our warehouse. Anyone can visit us in that location. Feel free to come and check products on your own hand.</h4></Col>
                    <Col lassName='mx-4'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/q0dncveB8-o?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Video;