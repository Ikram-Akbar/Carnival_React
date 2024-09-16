import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Banner from './Banner/Banner';

const Home = () => {
    return (
       <>
       <Container>
        <Row>
            <Col>
            <Banner></Banner>
            </Col>
        </Row>
       </Container>
       </>
    );
};

export default Home;