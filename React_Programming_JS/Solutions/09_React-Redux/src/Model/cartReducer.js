// ordertReducer.js
// Copyright © NextStep IT Training. All rights reserved.
//

import { ADD_CART_ITEM_ACTION, CLEAR_CART_ITEMS_ACTION, REMOVE_CART_ITEM_ACTION } from './modelActions'
import Cart from '../Cart/Cart';

class CartReducer {

    constructor() {

        this.reduce = this.reduce.bind(this)
    }

    reduce(state, action) {

        let result = state ? state : null

        switch (action.type) {

            case ADD_CART_ITEM_ACTION:
                result = this.reduceNewEntry(result, action.data)
                break

            case CLEAR_CART_ITEMS_ACTION:
                result = this.reduceClearEntries(result)
                break
            
            case REMOVE_CART_ITEM_ACTION:
                result = this.reduceRemoveEntry(result, action.data)
                break

            default:
                break
        }

        return result
    }

    reduceNewEntry(state, entry) {

        let result = new Cart(state)

        result.add(entry)
        
        return result
    }

    reduceClearEntries(state) {

        let result = new Cart(state)

        result.clear()

        return result
    }

    reduceRemoveEntry(state, entry) {

        let result = new Cart(state)

        result.remove(entry)

        return result
    }
}

export default (new CartReducer()).reduce