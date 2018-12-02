// ProductActionCreator.js
// Copyright © NextStep IT Training. All rights reserved.
//
// THe action-creator for the production actions. Because of the asynchronouse nature of the actions, instead of bindActionCreators
// these methods must call dispatch themselves. So, connect is used to bind 
//

import dataContext from '../Data-Access/dataContext'
import { SET_BEVERAGES_ACTION, SET_BEVERAGES_ERROR_ACTION, SET_PASTRIES_ACTION, SET_PASTRIES_ERROR_ACTION } from './modelActions'

export default class ProductActionCreator {

    constructor(dispatch) {

        this.dispatch = dispatch;
    }

    getBeverages() {

        dataContext.beverageContext.getBeverages()
            .then( (beverages) => this.dispatch({ type: SET_BEVERAGES_ACTION, data: beverages }) )
            .catch( (error) => {
                console.log(error)
                this.dispatch({ type: SET_BEVERAGES_ERROR_ACTION })
            })
    }

    getPastries() {

        dataContext.pastryContext.getPastries()
            .then( (pastries) => this.dispatch({ type: SET_PASTRIES_ACTION, data: pastries }) )
            .catch( (error) => {
                console.log(error)
                this.dispatch({ type: SET_PASTRIES_ERROR_ACTION })
            })
    }
}