// Main.js
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react' 

import Footer from '../Boilerplate/Footer'
import Header from '../Boilerplate/Header'
import Navigation from './Navigation'
import Routes from './Routes'

class Main extends Component {

    render() {

        return (
            <div className="app">
                <Header />
                <Navigation />
                <div className="app-content">
                    <Routes />
                </div>
                <Footer />
            </div>
        )
    }
X}

export default Main