// CArtActionCreator.js
// Copyright © NextStep IT Training. All rights reserved.
//
// The action-creator for the production actions. Because of the asynchronouse nature of the actions, instead of bindActionCreators
// these methods must call dispatch themselves. So, connect is used to bind 
//

import { ADD_CART_ITEM_ACTION, CLEAR_CART_ITEMS_ACTION, REMOVE_CART_ITEM_ACTION } from './modelActions'

class CartActionCreator {

    constructor(dispatch) {

        this.dispatch = dispatch;
    }

    addCartEntry(entry) {

        this.dispatch({ type: ADD_CART_ITEM_ACTION, data: entry })
    }

    clearCart() {

        this.dispatch({ type: CLEAR_CART_ITEMS_ACTION, data: null })
    }

    removeCartEntry(entry) {

        this.dispatch({ type: REMOVE_CART_ITEM_ACTION, data: entry })
    }
}

export default CartActionCreator