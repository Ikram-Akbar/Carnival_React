import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMealCard = ({ item }) => {
    const { id, title, image, price, rating } = item;
    return (
        <Card style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img
                variant="top"
                src={image}
                alt={title}
                style={{
                    height: '200px',
                    objectFit: 'cover'
                }}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex justify-content-between '>
                    <Card.Text><>Price:</> {price}</Card.Text>
                    <Card.Text><>Rating:</> {rating} / 5</Card.Text>
                </div>
                <Link to={`/meals/${id}`} ><Button variant="primary">Order Now</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default SingleMealCard;
