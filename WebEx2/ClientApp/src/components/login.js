import React, { Component } from 'react';
import { Button, Form, Container, Col, FormGroup, Label, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <Container>
                <Form>
                    <Row className="justify-content-md-center">
                        <Col sm="6">
                            <h2>Logg inn</h2>

                            <FormGroup>
                                <Label for="brukernavn">Brukernavn</Label>
                                <Input type="text" placeholder="Brukernavn" className="form-control" id="brukernavn" required="required" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="passord">Passord</Label>
                                <Input type="text" placeholder="Passord" className="form-control" id="passord" required="required" />
                            </FormGroup>

                            <FormGroup>
                                <Button className="btn btn-primary">Logg Inn</Button>
                            </FormGroup>

                            <FormGroup>
                                <Link className="link-primary" to="/registrer">Opprett Bruker</Link>
                            </FormGroup>

                        </Col>
                    </Row>
                    
                </Form>
            </Container>
        );
    }
}
