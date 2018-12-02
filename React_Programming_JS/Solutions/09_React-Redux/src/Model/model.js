// model.js
// Copyright © NextStep IT Training. All rights reserved.
//

import { combineReducers, createStore } from 'redux'

import cart from '../Cart/Cart';
import productReducer from './productReducer'
import cartReducer from './cartReducer'

class ReduxModel {

    constructor() {

        let reducer = combineReducers( { product: productReducer, cart: cartReducer } )
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

            cart: new cart()
        }
    }
}

let model = new ReduxModel()
export default model