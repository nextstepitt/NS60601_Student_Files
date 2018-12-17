// App.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import '../assets/styles/application.css'
import ApplicationModelStoreController from '../model/ApplicationModelStoreController'
import Main from './Main'

class App extends Component {

    constructor(props) {
    
        super(props)

        this.applicationModelStoreController = new ApplicationModelStoreController()
    }

    render() {

        return (
            <Provider store={ this.applicationModelStoreController.store }>
                <Router>
                    <Main />
                </Router>
            </Provider>
        )
    }
}

export default App