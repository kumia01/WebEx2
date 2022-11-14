import React, { Component } from 'react';
import { Button, Form, Container, Col, Row } from 'reactstrap';


export class Balanse extends Component {
    static displayName = Balanse.name;

    render() {
        return (
            /* Balanse og Knapper */
            <Container>
                <Row fluid className="align-items-center justify-content-center">
                    <Col fluid>
                        <p> Din bokførte saldo er: <br /><b>3, 000 NOK</b></p>
                    </Col>
                    <Col fluid>
                        <Button className="btn btn-outline" id="innskudd">+ Inskudd</Button>
                        <Button className="btn btn-primary" id="overføring">Overføring</Button>
                    </Col>
                </Row>

                <Row fluid className="align-items-center justify-content-center">
                    <Col fluid>
                        <canvas id="balanse"></canvas>
                    </Col>
                </Row>

                <Row fluid className="align-items-center justify-content-center">
                    <Col fluid>
                        <p className="bi bi-clock-history"> Nylig aktvitet</p>
                        <p>
                            Logget inn 27.10.2022 23.30
                        </p>
                    </Col>
                    <Col fluid>
                        <p className="bi bi-arrow-repeat"> Cash Flow</p>
                        <p>Innskudd: Overføring NOK 3, 000.00 via Vipps</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}