import React, { Component } from 'react';
import { Button, Form, Container, Col, Row, Card, CardTitle, CardText } from 'reactstrap';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <Container>
                <Row>
                    <Col sm="6">
                        <Card>
                            <CardTitle>
                                <p className="h5 font-weight-bold">Hjelper unge voksne vinne økonomisk</p>
                            </CardTitle>

                            <CardText>
                                Ghost Finance er en brukervennlig aksjehandel- og investeringsplattform for unge investorer som deg.<br />
                                    Jevnlig investering kan hjelpe deg bygge kapital og oppnå dine økonomiske mål.
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
