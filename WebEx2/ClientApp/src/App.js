import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { Balanse } from './components/Balanse';
import { Login } from './components/login';
import { Registrer } from './components/registrer';
import './custom.css'
import { Home } from './components/Home';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/balanse' component={Balanse} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/login' component={Login} />
            <Route path='/registrer' component={Registrer} />
      </Layout>
    );
  }
}
