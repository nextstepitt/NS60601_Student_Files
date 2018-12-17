// ProductList.js
// Copyright © NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../assets/styles/application.css'
import Product from '../data-access/Product'
import ProductItem from './ProductItem'

class ProductList extends Component {

    static get propTypes() {

        return {

            title: PropTypes.string.isRequired,
            products: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired
        }
    }

    render() {

        let productItems = this.props.products.map( (product) => <ProductItem key={ product.id } product={ product } /> )

        return (
            <div className="list">
                <div className="list-title">{ this.props.title }</div>
                <table className="list">
                    <thead>
                        <tr>
                            <th className="list-name"></th>
                            <th className="list-price">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { productItems }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductList