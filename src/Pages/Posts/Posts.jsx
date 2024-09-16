import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleData from './SingleData';
import { Col, Container, Row } from 'react-bootstrap';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Posts = () => {
    const datum = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;  // Customize based on your requirement
    const totalPages = Math.ceil(datum.length / postsPerPage);

    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = datum.slice(startIndex, startIndex + postsPerPage);

    return (
        <div>
            <Container>
                <Row>
                    <h1>Available posts for reading: {datum.length}</h1>
                    {
                        paginatedPosts.map((data, idx) => (
                            <Col className='my-2' key={data.id || idx} md={4} lg={3}>
                                <SingleData data={data} />
                            </Col>
                        ))
                    }
                </Row>
                <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={setCurrentPage}
                />
            </Container>
        </div>
    );
};

export default Posts;
