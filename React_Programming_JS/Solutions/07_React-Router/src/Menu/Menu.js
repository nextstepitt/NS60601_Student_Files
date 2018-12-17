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
            pastries: []
        }
    }

    componentDidMount() {

        this.getBeverages()
        this.getPastries()
    }

    async getBeverages() {

        try {
        
            const receivedBeverages = await dataContext.beverageContext.getBeverages()

            this.setState({ beverages: receivedBeverages })
        }

        catch (error) {

            console.log(error)

            this.setState({ pastries: [] })
        }
    }

    async getPastries() {

        try {
        
            const receivedPastries = await dataContext.pastryContext.getPastries()
            
            this.setState({ pastries: receivedPastries })
        }

        catch (error) {

            console.log(error)

            this.setState({ pastries: [] })
        }
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