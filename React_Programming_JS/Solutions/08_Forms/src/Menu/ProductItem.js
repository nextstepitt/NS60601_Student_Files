// ProductItem.js
// Copyright © NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../Assets/styles/application.css'
import Product from '../Data-Access/Product'

export default class ProductItem extends Component {

    static get propTypes() {

        return {

            addToCart: PropTypes.func.isRequired,
            product: PropTypes.instanceOf(Product).isRequired
        }
    }

    render() {

        return (
            <tr>
                <td className="list-name">{this.props.product.name}</td>
                <td className="list-price">${this.props.product.price}</td>
                <td className="list-add-button"><button onClick={ () => this.props.addToCart(this.props.product) }>Add to cart</button></td>
            </tr>
        )
    }
}
