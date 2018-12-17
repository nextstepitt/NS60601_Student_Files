// ProductList.js
// Copyright © NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../assets/styles/application.css'
import AccordionComponent from '../common/AccordionComponent'
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

            addToCart: PropTypes.func.isRequired,
            products: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired,
            title: PropTypes.string.isRequired
        }
    }

    render() {

        let content = null

        if (this.props.error) {

            content = <span className="error">The list cannot be loaded.</span>
        
        } else {

            let productItems = this.props.products.map( (product) => <ProductItem key={ product.id } product={ product } addToCart={ this.props.addToCart } /> )
            
            content = (
                <table className="list">
                    <tbody>
                        <tr>
                            <th className="list-name"></th>
                            <th className="list-price">Price</th>
                            <th className="list-add-button"></th>
                        </tr>
                        { productItems }
                    </tbody>
                </table>
            )
        }

        return (
            <AccordionComponent title={ this.props.title } open={ false }>
                { content }
            </AccordionComponent>
        )
    }
}

export default ProductList