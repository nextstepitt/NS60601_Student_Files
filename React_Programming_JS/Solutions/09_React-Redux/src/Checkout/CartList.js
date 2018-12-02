// CartList.js
//
// Show the shopping cart contents.

import React, { Component } from 'react'

export default class CartList extends Component {

    constructor(props) {

        super(props)

        this.remove = this.remove.bind(this)
    }

    render() {

        let result = null

        if (this.props.cart.entries.length > 0) {

            let items = this.props.cart.entries.map( (entry) => ( <tr key="entry.id">
                                                                        <td className="cart-name">{ entry.name }</td>
                                                                        <td className="cart-price">{ entry.price }</td>
                                                                        <td className="cart-remove-button"><button onClick={ () => this.remove(entry) }>Remove</button></td>
                                                                        <td className="cart-instructions">{ entry.instructions }</td>
                                                                    </tr> ))

            let total = (   <tr key="total">
                                <td className="cart-name"></td>
                                <td className="cart-price">{ this.props.cart.total() }</td>
                                <td className="cart-remove-button"></td>
                                <td className="cart-instrctions"></td>
                            </tr> )

            result = <table className="cart">
                            <tbody>
                                { items }
                                { total }
                            </tbody>
                        </table>
        }

        return result
    }

    remove(entry) {

        this.props.cartData.removeCartEntry(entry)
    }
}