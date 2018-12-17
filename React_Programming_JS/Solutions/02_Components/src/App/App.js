// App.js
// Copyright © nTier Training. All rights reserved.
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'

import '../assets/styles/application.css'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Landing from '../landing/Landing'

class App extends Component {

    render() {

        return (

            <div className="app">
                <Header />
                <div className="app-content">
                    <Landing />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App