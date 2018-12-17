// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/application.css'
import cart from '../cart/cart'
import CartEntry from '../cart/CartEntry'
import CartList from '../checkout/CartList'
import dataContext from '../data-access/dataContext'
import ProductList from './ProductList'

class Menu extends Component {

    constructor(props) {

        super(props)

        this.addToCart = this.addToCart.bind(this)
        this.cancelAddToCart = this.cancelAddToCart.bind(this)
        this.changeSpecialInstructions = this.changeSpecialInstructions.bind(this)
        this.commitAddToCart = this.commitAddToCart.bind(this)
    
        this.state = {

            beverages: [],
            item: null,
            pastries: [],
            showSpecialInstructions: false,
            specialInstructions: ''
        }
    }

    addToCart(item) {

        this.setState({ showSpecialInstructions: true, item: item })
    }

    cancelAddToCart() {

        this.setState({ showSpecialInstructions: false, specialInstructions: '' })
    }

    changeSpecialInstructions(event) {

        this.setState({ specialInstructions: event.target.value })
    }

    commitAddToCart() {

        cart.add(new CartEntry({ name: this.state.item.name, price: this.state.item.price, instructions: this.state.specialInstructions }))
        this.setState({ showSpecialInstructions: false, specialInstructions: '' })
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
                <div className={ this.state.showSpecialInstructions ? 'special-instructions-visible' : 'special-instructions-hidden' }></div>
                <div className={ this.state.showSpecialInstructions ? 'special-instructions' : 'special-instructions-hidden' }>
                    { this.state.item ? this.state.item.name : null }<br/><br/>
                    <input className="special-instructions" type="text" placeholder="Special Instructions" value={ this.state.specialInstructions } onChange={ this.changeSpecialInstructions } /><br/>
                    <div className="special-instructions-buttons">
                        <button onClick={ this.cancelAddToCart }>Cancel</button>
                        <button onClick={ this.commitAddToCart }>Add to Cart</button>
                    </div>
                </div>
                <h1>Menu</h1>
                <ProductList title="Beverages" products={ this.state.beverages } addToCart={ this.addToCart } />
                <ProductList title="Pastries" products={ this.state.pastries } addToCart={ this.addToCart } />
                <h2>Cart</h2>
                <CartList />
                { cart.entries.length ? <Link to="/checkout"><button>Checkout</button></Link> : null }
            </div>
        )
    }
}

export default Menu