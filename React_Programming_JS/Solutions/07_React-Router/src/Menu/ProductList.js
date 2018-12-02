// ProductList.js
// Copyright © NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../Assets/styles/application.css'
import AccordionList from '../Common/AccordionList'
import Product from '../Data-Access/Product'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    static get defaultProps() {

        return {

            error: false
        }
    }

    static get propTypes() {

        return {

            error: PropTypes.bool,
            title: PropTypes.string.isRequired,
            products: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired
        }
    }

    render() {

        let content = null

        if (this.props.error) {

            content = <span className="error">The list cannot be loaded.</span>
        
        } else {

            let productItems = this.props.products.map( (product) => <ProductItem key={ product.id } product={ product } /> )
            
            content = (
                <table className="list">
                    <tbody>
                        <tr>
                            <th className="list-name"></th>
                            <th className="list-price">price</th>
                        </tr>
                        { productItems }
                    </tbody>
                </table>
            )
        }

        return (
            <AccordionList title={ this.props.title } open={ false }>
                { content }
            </AccordionList>
        )
    }
}
