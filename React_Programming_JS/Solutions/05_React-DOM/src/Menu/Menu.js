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

        console.log("Menu: constructor")
    
        this.state = {

            beverages: [],
            beveragesError: false,
            pastries: [],
            pastriesError: false
        }

        this.mounted = true

        dataContext.beverageContext.getBeveragesSlow()
            .then( beverages => this.mounted && this.setState({ beverages: beverages, beveragesError: false }) )
            .catch( error => { console.log(error); this.mounted && this.setState({ pastries: [], beveragesError: true }) } )

        dataContext.pastryContext.getPastriesSlow()
            .then( pastries => this.mounted && this.setState({ pastries: pastries, pastriesError: false }) )
            .catch( error => { console.log(error); this.mounted && this.setState({ pastries: [], pastriesError: true }) } )
    }

    componentDidMount(prevProps, prevState, snapshot) {

        console.log("Menu: componentDidMount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("Menu: componentDidUpdate")
    }

    componentWillUnmount() {

        console.log("Menu: componentWillUnmount")

        this.mounted = false
    }

    static getDerivedStateFromProps(props, state) {

        console.log("Menu: getDerivedStateFromProps")

        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log("Menu: getSnapshotFromProps")

        return null
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log("Menu: shouldComponentMount")

        return true
    }

    render() {

        console.log("Menu: render")

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