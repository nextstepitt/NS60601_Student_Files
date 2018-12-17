// App.js
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'

import '../assets/styles/application.css'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Menu from '../menu/Menu'

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