// ProductList.js
// Copyright © NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../assets/styles/application.css'
import Product from '../data-access/Product'
import ProductItem from './ProductItem';

class ProductList extends Component {

    static get defaultProps() {

        return {

            error: false
        }
    }

    static get propTypes() {

        return {

            products: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired,
            title: PropTypes.string.isRequired
        }
    }

    render() {

        let content = null

        if (!this.props.products || this.props.products.length === 0) {

            content = <span className="error">The list is not loaded.</span>
        
        } else {

            let productItems = this.props.products.map( (product) => <ProductItem key={ product.id } product={ product } /> )
            
            content = (
                <table className="list">
                    <thead>
                        <tr>
                            <th className="list-name"></th>
                            <th className="list-price">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { productItems }
                    </tbody>
                </table>
            )
        }

        return (
            <div className="list">
                <div className="list-title">{ this.props.title }</div>
                { content }
            </div>
        )
    }
}

export default ProductList