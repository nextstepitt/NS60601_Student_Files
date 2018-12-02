// productReducer.js
// Copyright © NextStep IT Training. All rights Reserved.
//

import { GET_BEVERAGES_ACTION, GET_BEVERAGES_ERROR_ACTION, GET_PASTRIES_ACTION, GET_PASTRIES_ERROR_ACTION } from './modelActions'

class ProductReducer {

    constructor() {

        this.reduce = this.reduce.bind(this)
    }

    reduce(state, action) {

        let result = state ? state : null

        switch (action.type) {

            case GET_BEVERAGES_ACTION:
                result = this.reduceBeverages(result, action.data)
                break

            case GET_BEVERAGES_ERROR_ACTION:
                result = this.reduceBeveragesError(result, action)
                break

            case GET_PASTRIES_ACTION:
                result = this.reducePastries(result, action.data)
                break

            case GET_PASTRIES_ERROR_ACTION:
                result = this.reducePastriesError(result)
                break

            default:
                break
        }

        return result
    }

    reduceBeverages(state, beverages) {

        let result = { ...state }

        result.beverages = beverages
        result.beveragesError = false

        return result
    }

    reduceBeveragesError(state) {

        let result = { ...state }

        result.beverages = []
        result.beveragesError = true

        return result
    }

    reducePastries(state, pastries) {

        let result = { ...state }

        result.pastries = pastries
        result.pastriesError = false

        return result
    }

    reducePastriesError(state) {
 
        let result = { ...state }

        result.pastries = []
        result.pastriesError = false

        return result       
    }
}

export default (new ProductReducer()).reduce