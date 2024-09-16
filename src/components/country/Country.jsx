import { useState } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";

const Country = ({ country, handleVisitedCountry }) => {
    const [visited, setVisited] = useState(false);

    const handle_visit = () => {
        setVisited(!visited);
        handleVisitedCountry(country);
    }

    return (
        <div>
            <Container>
                <Card >
                    <Card.Img style={{ width: "100%", height: "130px" }} variant="top" src={country.flags.png} />
                    <Card.Body>
                        <Card.Title className="fs-6">
                            {country.name.official}
                            {visited ? <i className="bi bi-check-circle-fill mx-1"></i> : <i className="bi bi-airplane-fill mx-1"></i>}
                        </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush text-start">
                        <ListGroup.Item>Region - {country?.region} </ListGroup.Item>
                        <ListGroup.Item>Start Of Week - {country?.startOfWeek} </ListGroup.Item>
                        <ListGroup.Item>Status - {country?.status} </ListGroup.Item>
                        <ListGroup.Item>Subregion - {country?.subregion} </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button onClick={handle_visit}>{visited ? "Visited" : "Wish to Visit"}</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Country;
