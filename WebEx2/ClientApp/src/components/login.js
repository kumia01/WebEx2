import React, { Component} from 'react';
import { Button, Form, Container, Col, FormGroup, Label, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
        };
        this.validering = this.validering.bind(this);
        this.login = this.login.bind(this);
    }

    validering() {
        let input = this.state.input;
        let errors = {};
        let formOK = true;
        //brukernavn validering
        console.log(input["brukernavn"]);
        console.log(input["passord"]);
        if (!input["brukernavn"]) {
            formOK = false;
            errors["brukernavn"] = "denne kan ikke være tom";
        }

        if (typeof input["brukernavn"] != "undefined") {
            if (!input["brukernavn"].match(/^[0-9a-zA-ZæøåÆØÅ. \-]{2,20}$/g)){
                formOK = false;
                errors["brukernavn"] = "bare bokstav og tall mellom 6-20";
            }
        }

        //passord
        if (!input["passord"]) {
            formOK = false;
            errors["passord"] = "denne kan ikke være tom";
        }

        if (typeof input["passord"] != "undefined") {
            if (!input["passord"].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g)){
                formOK = false;
                errors["passord"] = "passord må inneholde tall og bokstaver. det skal være 6 eller mer tegn";
            }
        }
        this.setState({ errors: errors });
        return formOK
    }

    login() {
        if (this.validering()) {
            
        }
    }

    handleChange(input, e) {
        let inputs = this.state.input;
        inputs[input] = e.target.value;
        this.setState({ inputs });
    }

    render() {

        return (
            <Container>
                <Form>
                    <Row className="justify-content-md-center">
                        <Col sm="6">
                            <h2>Logg inn</h2>

                            <FormGroup>
                                <Label for="brukernavn">Brukernavn</Label>
                                <Input
                                    ref="brukernavn"
                                    type="text"
                                    placeholder="Brukernavn"
                                    className="form-control"
                                    onChange={this.handleChange.bind(this, "brukernavn") }
                                    value={this.state.input["brukernavn"]}
                                    required="required"
                                />
                                <span style={{ color: "red" }}>{this.state.errors["brukernavn"]}</span>
                            </FormGroup>

                            <FormGroup>
                                <Label for="passord">Passord</Label>
                                <Input
                                    ref="passord"
                                    type="password"
                                    placeholder="Passord"
                                    className="form-control"
                                    onChange={this.handleChange.bind(this, "passord")}
                                    value={this.state.input["passord"]}
                                    required="required"
                                />
                                <span style={{ color: "red" }}>{this.state.errors["passord"]}</span>
                            </FormGroup>

                            <FormGroup>
                                <Button className="btn btn-primary" onClick={this.login}>Logg Inn</Button>
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
