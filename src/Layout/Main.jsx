import React from 'react';
import Navigate from '../components/countries/Navigation/Navigate';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Navigate />
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;