// ProductItem.js
// Copyright © NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../assets/styles/application.css'
import Product from '../data-access/Product'

class ProductItem extends Component {

    static get propTypes() {

        return {

            product: PropTypes.instanceOf(Product).isRequired
        }
    }

    render() {

        return (
            <tr>
                <td className="list-name">{this.props.product.name}</td>
                <td className="list-price">${this.props.product.price.toFixed(2)}</td>
            </tr>
        )
    }
}

export default ProductItem