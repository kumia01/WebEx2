import React, { Component } from 'react';
import { Form, Col, Button } from "react-bootstrap";

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div className="container">
                <form className="form-registrer">
                    <div className="col-md-4">
                        <h2>Logg inn</h2>

                        <div className="form-group">
                            <label htmlFor="fornavn">Brukernavn</label>
                            <input type="text" placeholder="Brukernavn" className="form-control" id="brukernavn" required="required" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="etternavn">Passord</label>
                            <input type="text" placeholder="Passord" className="form-control" id="passord" required="required" />
                        </div>

                        <div className="form-group">
                            <div className="btnLogIn">
                                <button className="btn btn-primary">Logg Inn</button>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="linkRegBruker">
                                <a className="link-primary">Opprett Bruker</a>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
