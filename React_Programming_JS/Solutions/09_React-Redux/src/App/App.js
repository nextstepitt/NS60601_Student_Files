// App.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Main application component, called from index.js.
//

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import '../Assets/styles/application.css'
import Main from './Main'
import model from '../Model/model'

class App extends Component {

    render() {

        return (
            <Provider store={ model.store }>
                <Router>
                    <Main />
                </Router>
            </Provider>
        )
    }
}

export default App