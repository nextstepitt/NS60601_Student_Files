// ProductModelStateReducer.js
// Copyright © NextStep IT Training. All rights Reserved.
//

import update from 'immutability-helper';

import ProductActionType from './ProductActionType'
import ProductModelState from './ProductModelState'

class ProductModelStateReducer {

    constructor() {

        this.reduce = this.reduce.bind(this)
    }

    reduce(state, action) {

        let resultState = state ? state : new ProductModelState()

        switch (action.type) {

            case ProductActionType.SET_BEVERAGES_ACTION:
                resultState = this.reduceBeverages(resultState, action.payload)
                break

            case ProductActionType.SET_PASTRIES_ACTION:
                resultState = this.reducePastries(resultState, action.payload)
                break

            default:
                break
        }

        return resultState
    }

    reduceBeverages(state, beverages) {

        return update(state, { beverages: { $set: beverages }})
    }

    reducePastries(state, pastries) {

        return update(state, { pastries: { $set: pastries }})
    }
}

export default ProductModelStateReducer