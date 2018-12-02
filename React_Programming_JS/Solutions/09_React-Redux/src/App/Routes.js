// Main.js
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react' 
import { Route, Switch } from 'react-router'

import Checkout from '../Checkout/Checkout'
import Landing from '../Landing/Landing'
import Menu from '../Menu/Menu'

class Routes extends Component {

    render() {

        return (
            <Switch>
                <Route path="/" exact={ true } component={ Landing } />
                <Route path="/menu" component={ Menu } /> } />
                <Route path="/checkout" component={ Checkout } /> } />
            </Switch>
        )
    }
}

export default Routes