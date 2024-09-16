import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Country from "../country/Country";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error("Error fetching data:", error)); // Optional: handle errors
    }, []);

    const itemsPerPage = 8;
    // Calculate the items to display on the current page
    const offset = (currentPage - 1) * itemsPerPage;
    const currentCountries = countries.slice(offset, offset + itemsPerPage);
    // Calculate total number of pages
    const totalPages = Math.ceil(countries.length / itemsPerPage);

    // Handler for visited country
    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    };

    return (
        <div>
            <Container className="text-center mt-2">
                <h2>Number of available countries in the world - {countries.length}</h2>
                <Row>
                    <Col lg={10}>
                        <Row>
                            {currentCountries.map((country) => (
                                <Col key={country.cca3} md={3} className="mb-4">
                                    <Country handleVisitedCountry={handleVisitedCountry} country={country} />
                                </Col>
                            ))}
                        </Row>
                        {/* Responsive Pagination */}
                        <Row className="justify-content-center mt-4">
                            <Col xs="auto">
                                <ResponsivePagination
                                    current={currentPage}
                                    total={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    {visitedCountry.length > 0 ? (
                                        <>
                                            <h6>Visited Countries - {visitedCountry.length}</h6>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Country Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {visitedCountry.map((vc, idx) => (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>{vc.name.common}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </>
                                    ) : (
                                        "Not Visited Yet"
                                    )}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Countries;
