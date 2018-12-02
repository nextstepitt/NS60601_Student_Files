// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import '../Assets/styles/application.css'
import CartEntry from '../Cart/CartEntry'
import CartList from '../Checkout/CartList'
import CartActionCreator from "../Model/CartActionCreator";
import ProductActionCreator from "../Model/ProductActionCreator";
import ProductList from './ProductList'

class Menu extends Component {

    constructor(props) {

        super(props)

        this.addToCart = this.addToCart.bind(this)
        this.cancelAddToCart = this.cancelAddToCart.bind(this)
        this.changeSpecialInstructions = this.changeSpecialInstructions.bind(this)
        this.commitAddToCart = this.commitAddToCart.bind(this)
    
        this.state = {

            item: null,
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

        this.props.cartData.addCartEntry(new CartEntry({ name: this.state.item.name, price: this.state.item.price, instructions: this.state.specialInstructions }))
        this.setState({ showSpecialInstructions: false, specialInstructions: '' })
    }

    componentDidMount() {

        this.props.productData.getBeverages()
        this.props.productData.getPastries()
    }

    static mapStateToProps(state, ownProps) {

        return {

            beverages: state.product.beverages,
            beveragesError: state.product.beveragesError,
            pastries: state.product.pastries,
            pastriesError: state.product.pastriesError,
            cart: state.cart
        }
    }

    static mapDispatchToProps(dispatch, ownProps) {

        return {

            cartData: new CartActionCreator(dispatch),
            productData: new ProductActionCreator(dispatch)
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
                <ProductList title="Beverages" products={ this.props.beverages } error={ this.props.beveragesError } addToCart={ this.addToCart } />
                <ProductList title="Pastries" products={ this.props.pastries } error={ this.props.pastriesError } addToCart={ this.addToCart } />
                <h2>Cart</h2>
                <CartList cart={ this.props.cart } cartData={ this.props.cartData } />
                { this.props.cart.entries.length ? <Link to="/checkout"><button>Checkout</button></Link> : null }
            </div>
        )
    }
}

// export default Menu
export default connect(Menu.mapStateToProps, Menu.mapDispatchToProps)(Menu)