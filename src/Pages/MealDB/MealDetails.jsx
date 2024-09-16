import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const MealDetails = () => {
    const {params} = useParams()
    console.log(params);
    const meals_details = useLoaderData();
    const {id} = meals_details;
    return (
        <div>
            <h1>meals details will show : {id}</h1>
        </div>
    );
};

export default MealDetails;