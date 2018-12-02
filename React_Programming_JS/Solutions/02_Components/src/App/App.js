// App.js
// Copyright © nTier Training. All rights reserved.
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'

import Footer from '../Boilerplate/Footer'
import Header from '../Boilerplate/Header'
import Landing from '../Landing/Landing'

import '../Assets/styles/application.css'

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