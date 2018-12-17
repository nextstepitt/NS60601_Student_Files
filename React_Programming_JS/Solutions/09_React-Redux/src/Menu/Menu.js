// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import '../assets/styles/application.css'
import CartActionController from '../cart/CartActionController'
import CartEntry from '../cart/CartEntry'
import CartList from '../checkout/CartList'
import Product from '../data-access/Product'
import ProductActionController from '../data-access/ProductActionController'
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

        if (this.props.cartActionController && this.state.item) {

            this.props.cartActionController.addCartEntry(new CartEntry({ name: this.state.item.name, price: this.state.item.price, instructions: this.state.specialInstructions }))
            this.setState({ showSpecialInstructions: false, specialInstructions: '' })
        }
    }

    componentDidMount() {

        this.props.productActionController && this.props.productActionController.getBeverages();
        this.props.productActionController && this.props.productActionController.getPastries();
    }

    static mapStateToProps(state, ownProps) {

        return {

            beverages: state.products.beverages,
            pastries: state.products.pastries,
            cart: state.cart
        }
    }

    static mapDispatchToProps(dispatch, ownProps) {

        return {

            cartActionController: new CartActionController(dispatch),
            productActionController: new ProductActionController(dispatch)
        }
    }

    static get propTypes() {

        return {

            cartActionController: PropTypes.instanceOf(CartActionController),
            beverages: PropTypes.arrayOf(PropTypes.instanceOf(Product)),
            pastries: PropTypes.arrayOf(PropTypes.instanceOf(Product)),
            productActionController: PropTypes.instanceOf(ProductActionController)
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
                <ProductList id="beverages" title="Beverages" products={ this.props.beverages } error={ this.props.beveragesError } addToCart={ this.addToCart } />
                <ProductList id="pastries" title="Pastries" products={ this.props.pastries } error={ this.props.pastriesError } addToCart={ this.addToCart } />
                <h2>Cart</h2>
                <CartList cart={ this.props.cart } cartData={ this.props.cartData } />
                { this.props.cart.entries.length ? <Link to="/checkout"><button>Checkout</button></Link> : null }
            </div>
        )
    }
}

// export default Menu
export default connect(Menu.mapStateToProps, Menu.mapDispatchToProps)(Menu)