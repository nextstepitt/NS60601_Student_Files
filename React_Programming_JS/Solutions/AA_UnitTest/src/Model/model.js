// model.js
// Copyright © NextStep IT Training. All rights reserved.
//

import { combineReducers, createStore } from 'redux'

import cart from '../Cart/Cart';
import productReducer from './productReducer'
import orderReducer from './orderReducer'

class ReduxModel {

    constructor() {

        let reducer = combineReducers( { product: productReducer, order: orderReducer } )
        this._store = createStore(reducer, this.initialState)
    }

    get store() {

        return this._store
    }

    get initialState() {

        return {

            product: {
                beverages: [],
                pastries: []
            },

            order: new cart()
        }
    }
}

let model = new ReduxModel()
export default model
