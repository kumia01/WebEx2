﻿import React, { Component } from 'react';
import blåstolpe from '../img/blåstolper.png';
import { Button, Form, Container, Col, Row, Card, CardTitle, CardText} from 'reactstrap';


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Container>
                <Row fluid className="align-items-center justify-content-center">
                    <Col fluid>
                        <h3><strong>Hjelper unge voksne</strong></h3>
                        <h3><strong>Vinne økonomisk.</strong></h3>
                        <p>
                            GhostCoin er en brukervennlig aksjehandel- og investeringsplattform for unge investorer som deg.
                            <br />Jevnlig investering kan hjelpe deg bygge kapital og oppnå dine økonomiske mål.
                        </p>
                    </Col>
                    <Col fluid>
                        <img src={blåstolpe} width="450" />
                    </Col>
                </Row>
            </Container>
        );
    }
}