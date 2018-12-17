// ProductActionController.js
// Copyright © NextStep IT Training. All rights reserved.
//

import { createModelAction } from '../model/ModelAction'
import dataContext from './dataContext'
import ProductActionType from './ProductActionType'

class ProductActionController {

    constructor(dispatch) {

        this.dispatch = dispatch
    }

    async getBeverages() {

        try {

            const beverages = await dataContext.beverageContext.getBeverages()

            this.dispatch(createModelAction(ProductActionType.SET_BEVERAGES_ACTION, beverages))
        }

        catch (error) {

            console.log(error)
            this.dispatch(createModelAction(ProductActionType.SET_BEVERAGES_ACTION, []))
        }
    }

    async getPastries() {

        try {

            const pastries = await dataContext.pastryContext.getPastries()

            this.dispatch(createModelAction(ProductActionType.SET_PASTRIES_ACTION, pastries))
        }

        catch (error) {

            console.log(error)
            this.dispatch(createModelAction(ProductActionType.SET_PASTRIES_ACTION, []))
        }
    }
}

export default ProductActionController