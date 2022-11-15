import React, { Component } from 'react';
import { Button, Form, Container, Col, Row, } from 'reactstrap';


export class Uttak extends Component {
    static displayName = Uttak.name;

    render() {
        return (
            <Container>
                <Row fluid className="align-items-center">
                    <Col fluid sm="3">
                        <h3 style={{ color: "#023e73" }} className="text-center">Overføringer</h3>
                        <Row fluid>
                            <Col fluid className="text-center">
                            </Col>
                        </Row>
                    </Col>

                    <Col sm="3">
                    </Col>

                    <Col fluid sm="6" className="text-center">
                        <h3 style={{ color: "#023e73"  }}>Hvordan ønsker du å sette inn penger?</h3>
                    </Col>
                </Row>

                <Row fluid className="align-items-center">
                    <Col fluid className="btn-group-vertical mt-3" sm="3">
                        <Button className="btn btn-primary btn-sm mb-1">Overfør</Button>
                        <Button className="btn btn-primary btn-sm mb-1">Uttak</Button>
                        <Button className="btn btn-primary btn-sm mb-1">Aktiva</Button>
                        <Button className="btn btn-primary btn-sm mb-1">Overfør aksjer</Button>
                    </Col>

                    <Col sm="3"></Col>

                    <Col fluid className="btn-group-vertical mt-3" sm="6">
                        <Button className="btn btn-md mb-2" color="primary">Vipps</Button>{' '}
                        <Button className="btn btn-md mb-2" color="primary">Apple Pay</Button>{' '}
                        <Button className="btn btn-md mb-2" color="primary">Credit- eller debitkort</Button>{' '}
                        <Button className="btn btn-md mb-2" color="primary">Bankoverføring</Button>{' '}
                    </Col>
                </Row>
            </Container>
        );
    }
}