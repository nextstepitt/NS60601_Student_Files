// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import React, { Component } from 'react'

import '../Assets/styles/application.css'
import dataContext from '../Data-Access/dataContext'
import ProductList from './ProductList'

class Menu extends Component {

    constructor(props) {

        super(props)
    
        this.state = {

            beverages: [],
            beveragesError: false,
            pastries: [],
            pastriesError: false
        }

        dataContext.beverageContext.getBeverages()
            .then( beverages => this.setState({ beverages: beverages, beveragesError: false }) )
            .catch( error => { console.log(error); this.setState({ pastries: [], beveragesError: true }) } )

        dataContext.pastryContext.getPastries()
            .then( pastries => this.setState({ pastries: pastries, pastriesError: false }) )
            .catch( error => { console.log(error); this.setState({ pastries: [], pastriesError: true }) } )
    }

    render() {

        return (
            <div className="app-content">
                <h1>Menu</h1>
                <ProductList title="Beverages" products={ this.state.beverages } error={ this.state.beveragesError } />
                <ProductList title="Pastries" products={ this.state.pastries } error={ this.state.pastriesError } />
            </div>
        )
    }
}

export default Menu