import React, { Component } from 'react';
import { Button, Form, Container, Col, FormGroup, Label, Input } from 'reactstrap';


export class Registrer extends Component {
    static displayName = Registrer.name;
    

    render() {
        return (
            <Container>
                <Form>
                    <Col md="4">
                        <h2>Registrering av aksjekonto</h2>

                        <FormGroup>
                            <Label for="¨brukernavn">Brukernav:</Label>
                            <Input type="text" placeholder="Brukernavn" className="form-control" id="brukernavn" required="required" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="passord">Passord:</Label>
                            <Input type="password" placeholder="Password" className="form-control" id="passord" required="required" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="fornavn">Fornavn:</Label>
                            <Input type="text" placeholder="Fornavn" className="form-control" id="fornavn" required="required"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="etternavn">Etternavn:</Label>
                            <Input type="text" placeholder="Etternavn" className="form-control" id="etternavn" required="required"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="adresse">Adresse:</Label>
                            <Input type="text" placeholder="Adresse" className="form-control" id="adresse" required="required"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="postnr">Postnr:</Label>
                            <Input type="text" placeholder="Postnr" className="form-control" id="postnr" required="required"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="poststed">Poststed:</Label>
                            <Input type="text" placeholder="Poststed" className="form-control" id="poststed" required="required"/>
                        </FormGroup>


                        <FormGroup>
                            <Button className="btn btn-primary">Lag Bruker</Button>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}