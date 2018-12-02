// ordertReducer.js
// Copyright © NextStep IT Training. All rights reserved.
//

import { ADD_ORDER_ITEM_ACTION, CLEAR_ORDER_ITEMS_ACTION, REMOVE_ORDER_ITEM_ACTION } from './modelActions'
import Cart from '../Cart/Cart';

class OrderReducer {

    constructor() {

        this.reduce = this.reduce.bind(this)
    }

    reduce(state, action) {

        let result = state ? state : null

        switch (action.type) {

            case ADD_ORDER_ITEM_ACTION:
                result = this.reduceNewEntry(result, action.data)
                break

            case CLEAR_ORDER_ITEMS_ACTION:
                result = this.reduceClearEntries(result)
                break
            
            case REMOVE_ORDER_ITEM_ACTION:
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

export default (new OrderReducer()).reduce