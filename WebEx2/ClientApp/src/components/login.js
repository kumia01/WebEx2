import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div class="container">
                <form class="form-registrer">
                    <div class="col-md-4">
                        <h2>Log in</h2>

                        <div class="form-group">
                            <label for="fornavn">Brukernavn</label>
                            <input type="text" placeholder="Brukernavn" class="form-control" id="brukernavn" required="required" />
                        </div>

                        <div class="form-group">
                            <label for="etternavn">Passord</label>
                            <input type="text" placeholder="Passord" class="form-control" id="passord" required="required" />
                        </div>

                        <div class="form-group">
                            <div class="btnLogIn">
                                <button class="btn btn-primary">Logg Inn</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="linkRegBruker">
                                <a class="link-primary">Opprett Bruker</a>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
