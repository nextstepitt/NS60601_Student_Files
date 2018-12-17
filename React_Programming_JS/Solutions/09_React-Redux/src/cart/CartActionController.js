// CartActionController.js
// Copyright © NextStep IT Training. All rights reserved.
//

import { createModelAction } from '../model/ModelAction'
import CartActionType from './CartActionType'

class CartActionController {

    constructor(dispatch) {

        this.dispatch = dispatch
    }

    addCartEntry(entry) {

        this.dispatch(createModelAction(CartActionType.ADD_CART_ITEM_ACTION, entry))
    }

    clearCart() {

        this.dispatch(createModelAction(CartActionType.CLEAR_CART_ITEMS_ACTION))
    }

    removeCartEntry(entry) {

        this.dispatch(createModelAction(CartActionType.REMOVE_CART_ITEM_ACTION, entry))
    }

    getTotal(cart) {

        let result = 0

        // To be efficient, the prices are summed by reducing CartEntry objects, and then just the price is returned.

        if (cart && cart.entries && cart.entries.length) {

            result =  cart.entries.reduce( (a, b) => { return { id: 0, name: '', price: a.price + b.price, instructions: '' } }).price;
        }

        return result
    }
}

export default CartActionController