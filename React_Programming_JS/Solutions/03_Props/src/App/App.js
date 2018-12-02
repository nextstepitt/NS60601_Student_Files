// App.js
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'

import Footer from '../Boilerplate/Footer'
import Header from '../Boilerplate/Header'
import Menu from '../Menu/Menu'

import '../Assets/styles/application.css'

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