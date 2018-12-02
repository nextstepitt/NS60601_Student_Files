// OrderActionCreator.js
// Copyright © NextStep IT Training. All rights reserved.
//
// The action-creator for the production actions. Because of the asynchronouse nature of the actions, instead of bindActionCreators
// these methods must call dispatch themselves. So, connect is used to bind 
//

import { ADD_ORDER_ITEM_ACTION, CLEAR_ORDER_ITEMS_ACTION, REMOVE_ORDER_ITEM_ACTION } from './modelActions'

export default class OrderActionCreator {

    constructor(dispatch) {

        this.dispatch = dispatch;
    }

    addOrderEntry(entry) {

        this.dispatch({ type: ADD_ORDER_ITEM_ACTION, data: entry })
    }

    clearOrder() {

        this.dispatch({ type: CLEAR_ORDER_ITEMS_ACTION, data: null })
    }

    removeOrderEntry(entry) {

        this.dispatch({ type: REMOVE_ORDER_ITEM_ACTION, data: entry })
    }
}