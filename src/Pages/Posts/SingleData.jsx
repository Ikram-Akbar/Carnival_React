import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleData = ({ data }) => {
    return (
        <Card
            className="h-100 shadow-sm"
            style={{
                borderRadius: '10px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: '1px solid #ddd'
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
        >
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    ID: {data.id}
                </Card.Subtitle>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {data.title}
                </Card.Title>
                <Link to={`/posts/${data.id}`}><Button variant="primary" className="mt-3">
                    Read More
                </Button></Link>
            </Card.Body>
        </Card>
    );
};

export default SingleData;
