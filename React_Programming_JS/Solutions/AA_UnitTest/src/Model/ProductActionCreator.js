// ProductActionCreator.js
// Copyright © NextStep IT Training. All rights reserved.
//
// THe action-creator for the production actions. Because of the asynchronouse nature of the actions, instead of bindActionCreators
// these methods must call dispatch themselves. So, connect is used to bind 
//

import dataContext from '../Data-Access/dataContext'
import { GET_BEVERAGES_ACTION, GET_BEVERAGES_ERROR_ACTION, GET_PASTRIES_ACTION, GET_PASTRIES_ERROR_ACTION } from './modelActions'

export default class ProductActionCreator {

    constructor(dispatch) {

        this.dispatch = dispatch;
    }

    getBeverages() {

        dataContext.beverageContext.getBeverages()
            .then( (beverages) => this.dispatch({ type: GET_BEVERAGES_ACTION, data: beverages }) )
            .catch( (error) => {
                console.log(error)
                this.dispatch({ type: GET_BEVERAGES_ERROR_ACTION })
            })
    }

    getPastries() {

        dataContext.pastryContext.getPastries()
            .then( (pastries) => this.dispatch({ type: GET_PASTRIES_ACTION, data: pastries }) )
            .catch( (error) => {
                console.log(error)
                this.dispatch({ type: GET_PASTRIES_ERROR_ACTION })
            })
    }
}