import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleMealCard from './SingleMealCard';

const Meals = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulating fetching from a file
        fetch("/public/food.json")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setMenuItems(data.menuItems); // Access the `menuItems` array
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <Container>
            <h1>Menu Items</h1>
            <Row>
                {Array.isArray(menuItems) && menuItems.length > 0 ? (
                    menuItems.map(item => (
                        <Col key={item.id} md={4}>
                            <SingleMealCard
                                item = {item}
                            />
                        </Col>
                    ))
                ) : (
                    <p>No menu items found.</p>
                )}
            </Row>
        </Container>
    );
};

export default Meals;
