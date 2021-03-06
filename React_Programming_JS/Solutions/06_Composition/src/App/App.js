// App.js
// Copyright © 2018 NextStep IT Training. All rights reserved.
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'

import '../assets/styles/application.css'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Menu from '../menu/Menu'

class App extends Component {

    render() {

        return (

            <div className="app">
                <Header />
                <div className="app-content">
                    <Menu />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App