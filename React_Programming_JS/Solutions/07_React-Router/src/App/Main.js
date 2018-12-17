// Main.js
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react' 

import Footer from '../common/Footer'
import Header from '../common/Header'
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
}

export default Main