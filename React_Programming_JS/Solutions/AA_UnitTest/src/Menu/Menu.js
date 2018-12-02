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
import OrderActionCreator from "../Model/OrderActionCreator";
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

        this.props.productActionCreator.getBeverages()
        this.props.productActionCreator.getPastries()
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

        this.props.orderActionCreator.addOrderEntry(new CartEntry({ name: this.state.item.name, price: this.state.item.price, instructions: this.state.specialInstructions }))
        this.setState({ showSpecialInstructions: false, specialInstructions: '' })
    }

    static mapStateToProps(state, ownProps) {

        return {

            beverages: state.product.beverages,
            beveragesError: state.product.beveragesError,
            pastries: state.product.pastries,
            pastriesError: state.product.pastriesError,
            order: state.order
        }
    }

    static mapDispatchToProps(dispatch, ownProps) {

        return {

            orderActionCreator: new OrderActionCreator(dispatch),
            productActionCreator: new ProductActionCreator(dispatch)
        }
    }

    render() {

        return (
            <div className="app-content">
                <div className={ this.state.showSpecialInstructions ? 'special-instructions' : 'special-instructions-hidden' }>
                    { this.state.item ? this.state.item.name : null }<br/><br/>
                    <input className="special-instructions" type="text" placeholder="Special Instructions" value={ this.state.specialInstructions } onChange={ this.changeSpecialInstructions } /><br/>
                    <div className="special-instructions-buttons">
                        <button onClick={ this.cancelAddToCart }>Cancel</button>
                        <button onClick={ this.commitAddToCart }>Add to Cart</button>
                    </div>
                </div>
                <h1>Menu</h1>
                <ProductList title="Beverages" products={ this.props.beverages } error={ this.state.beveragesError } addToCart={ this.addToCart } />
                <ProductList title="Pastries" products={ this.props.pastries } error={ this.state.pastriesError } addToCart={ this.addToCart } />
                <h2>Cart</h2>
                <CartList order={ this.props.order } orderActionCreator={ this.props.orderActionCreator } />
                { this.props.order.entries.length ? <Link to="/checkout"><button>Checkout</button></Link> : null }
            </div>
        )
    }
}

// export default Menu
export default connect(Menu.mapStateToProps, Menu.mapDispatchToProps)(Menu)