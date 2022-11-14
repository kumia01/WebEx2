import React, { Component } from 'react';
import { Button, Form, Container, Col, Row, } from 'reactstrap';


export class Uttak extends Component {
    static displayName = Uttak.name;

    render() {
        return (
            <Container>
                <Row fluid className="align-items-center">
                    <Col fluid>
                        <h3 style={{ color: "#023e73" }}>Overføringer</h3>
                        <Button className="btn btn-primary btn-sm">Overfør</Button>  
                        <Button className="btn btn-primary btn-sm">Transaksjoner</Button>
                    </Col>
                </Row>

                <Row fluid className="align-items-center">
                    <Col fluid className="btn-group-vertical mt-3 costum-btn" sm="">
                        <Button className="btn btn-primary btn-sm mb-1 ">Overfør</Button>
                        <Button className="btn btn-primary btn-sm mb-1">Uttak</Button>
                        <Button className="btn btn-primary btn-sm mb-1">Aktiva</Button>
                        <Button className="btn btn-primary btn-sm mb-1">Overfør aksjer</Button>
                    </Col>

                    <Col fluid sm="9" className="justify-content-center">
                        <h3 style={{ color: "#023e73" }}>Overføringer</h3>
                        <h4 style={{ color: "#023e73" }}>Hvordan ønsker du å sette inn penger?</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
}