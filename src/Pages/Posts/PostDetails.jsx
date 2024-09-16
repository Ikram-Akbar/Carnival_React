import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './PostDetails.css'; // Make sure to create this file for custom styles

const PostDetails = () => {
    const data = useLoaderData();
    const { body, id, title, userId } = data;

    return (
        <div className="container mt-4">
            <Card className="fancy-card">
                <Card.Body>
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">User ID: {userId}</Card.Subtitle>
                    <Card.Text className="card-body-text">{body}</Card.Text>
                    <Link to="/posts">
                        <Button variant="primary" className="fancy-button">Go Back to Posts</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PostDetails;
