import React from 'react';
import Navigate from '../components/countries/Navigation/Navigate';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navigate/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;