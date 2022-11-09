import React, { Component } from 'react';
import { Button, Form, Container, Col, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <Container>
                <Form>
                    <Col className="col-md-4">
                        <h2>Logg inn</h2>

                        <FormGroup>
                            <Label for="fornavn">Brukernavn</Label>
                            <Input type="text" placeholder="Brukernavn" className="form-control" id="brukernavn" required="required" />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="etternavn">Passord</Label>
                            <Input type="text" placeholder="Passord" className="form-control" id="passord" required="required" />
                        </FormGroup>

                        <FormGroup>
                            <Button className="btn btn-primary">Logg Inn</Button>
                        </FormGroup>

                        <FormGroup>
                            <a className="link-primary">Opprett Bruker</a>
                        </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}
