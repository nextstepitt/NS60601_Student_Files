// Main.js
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react' 
import { Route, Switch } from 'react-router'

import Checkout from '../Checkout/Checkout'
import Footer from '../Boilerplate/Footer'
import Header from '../Boilerplate/Header'
import Landing from '../Landing/Landing'
import Menu from '../Menu/Menu'
import Navigation from './Navigation'

class Main extends Component {

    render() {

        return (
            <div className="app">
                <Header />
                <Navigation />
                <div className="app-content">
                    <Switch>
                        <Route path="/" exact={ true } component={ Landing } />
                        <Route path="/menu" component={ Menu } /> } />
                        <Route path="/checkout" component={ Checkout } /> } />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
X}

export default Main