// App.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '../assets/styles/application.css'
import Main from './Main'

class App extends Component {

    render() {

        return (
            <Router>
                <Main />
            </Router>
        )
    }
}

export default App