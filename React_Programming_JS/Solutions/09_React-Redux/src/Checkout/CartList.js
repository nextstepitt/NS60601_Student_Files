// CartList.js
//
// Show the shopping cart contents.
//

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CartModelState from '../cart/CartModelState'
import CartActionController from '../cart/CartActionController'

class CartList extends Component {

    static mapStateToProps(state, ownProps) {

        return {

            cart: state.cart
        }
    }

    static mapDispatchToProps(dispatch, ownProps) {

        return {

            cartActionController: new CartActionController(dispatch)
        }
    }

    static get propTypes() {

        return {

            cart: PropTypes.instanceOf(CartModelState),
            cartActionController: PropTypes.instanceOf(CartActionController)
        }
    }
    
    render() {

        let result = null;
        const cart = this.props.cart

        if (cart && cart.entries.length > 0) {

            let items = cart.entries.map( (entry) => ( <tr key={ entry.id }>
                                                            <td className="cart-name">{ entry.name }</td>
                                                            <td className="cart-price">{ entry.price }</td>
                                                            <td className="cart-remove-button"><button onClick={ () => this.remove(entry) }>Remove</button></td>
                                                            <td className="cart-instructions">{ entry.instructions }</td>
                                                        </tr> ));

            let total = <tr key="total">
                                <td className="cart-name"></td>
                                <td className="cart-price">Total: ${ this.props.cartActionController.getTotal(cart).toFixed(2) }</td>
                                <td className="cart-remove-button"></td>
                                <td className="cart-instructions"></td>
                            </tr>;

            result = <table className="cart">
                            <thead>
                                <tr>
                                    <th className="cart-name">Product</th>
                                    <th className="cart-price">Price</th>
                                    <th className="cart-remove-button">&nbsp;</th>
                                    <th className="cart-instructions">Special Instructions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { items }
                                { total }
                            </tbody>
                        </table>;
        }

        return result
    }

    remove(entry) {

        this.props.cartActionController && this.props.cartActionController.removeCartEntry(entry);
        
        // State must change to update the view, so a dummy entry.

        this.setState({ dummy: null });
    }

}

export default connect(CartList.mapStateToProps, CartList.mapDispatchToProps)(CartList)