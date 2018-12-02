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

    constructor(props) {

        super(props)

        this.state = {
            showMenu: true
        }

        setTimeout( () => {

            this.setState( { showMenu: false } )
        
        }, 5000)
    }

    render() {

        let content = this.state.showMenu ? <Menu /> : null

        return (

            <div className="app">
                <Header />
                <div className="app-content">
                    { content }
                </div>
                <Footer />
            </div>
        )
    }
}

export default App