// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import React, { Component } from 'react'

import '../assets/styles/application.css'
import dataContext from '../data-access/dataContext'
import ProductList from './ProductList'

class Menu extends Component {

    constructor(props) {

        super(props)
    
        this.state = {

            beverages: [],
            pastries: [],
        }

        // This example has been left as a Promise resolution just to keep an example of
        // that in place. From the next solution on, the procedure has been turned into
        // async functions with await.

        dataContext.beverageContext.getBeverages()
            .then( beverages => this.setState({ beverages: beverages }) )
            .catch( error => { console.log(error); this.setState({ pastries: [] }) } )

        dataContext.pastryContext.getPastries()
            .then( pastries => this.setState({ pastries: pastries }) )
            .catch( error => { console.log(error); this.setState({ pastries: [] }) } )
    }

    render() {

        return (
            <div className="app-content">
                <h1>Menu</h1>
                <ProductList title="Beverages" products={ this.state.beverages } />
                <ProductList title="Pastries" products={ this.state.pastries } />
            </div>
        )
    }
}

export default Menu