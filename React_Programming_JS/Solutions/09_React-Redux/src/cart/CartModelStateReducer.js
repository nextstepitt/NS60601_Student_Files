// CartModelStateReducer.js
// Copyright © NextStep IT Training. All rights reserved.
//

import update from 'immutability-helper';

import CartActionType from './CartActionType'
import CartModelState from './CartModelState'

class CartModelStateReducer {

    constructor() {

        this.reduce = this.reduce.bind(this)
    }

    reduce(state, action) {

        let resultState = state ? state : new CartModelState()

        switch (action.type) {

            case CartActionType.ADD_CART_ITEM_ACTION:
                resultState = this.reduceNewEntry(resultState, action.payload)
                break

            case CartActionType.CLEAR_CART_ITEMS_ACTION:
                resultState = this.reduceClearEntries(resultState)
                break
            
            case CartActionType.REMOVE_CART_ITEM_ACTION:
                resultState = this.reduceRemoveEntry(resultState, action.payload)
                break

            default:
                break
        }

        return resultState
    }

    reduceNewEntry(state, entry) {

        entry.id = state.entryIdentity + 1

        return update(state, { entryIdentity: { $set: entry.id }, entries: { $push: [ entry ] }})
    }

    reduceClearEntries(state) {

        return update(state, { entries: { $set: [] }, entryIdentity: { $set: 0 }})
    }

    reduceRemoveEntry(state, entry) {

        const index = state.entries.indexOf(entry)

        return index >= 0 ? update(state, { entries: { $splice: [[index, 1]] }}) : state
    }
}

export default CartModelStateReducer