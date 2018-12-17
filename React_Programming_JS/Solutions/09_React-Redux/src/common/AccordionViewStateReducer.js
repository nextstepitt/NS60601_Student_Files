// AccordionViewStateReducer.js
// Copyright © NextStep IT Training. All rights reserved.
//

import update from 'immutability-helper'

import AccordionActionType from './AccordionActionType'
import AccordionViewState from './AccordionViewState'

class AccordionViewStateReducer {

    constructor() {

        this.reduce = this.reduce.bind(this)
    }

    reduce(state, action) {

        let resultState = state ? state : new AccordionViewState();

        switch (action.type) {

            case AccordionActionType.SET_ACCORDION_STATE_ACTION:
                resultState = this.reduceSetAccordionState(resultState, action.payload)
                break

            default:
                break
        }

        return resultState
    }

    reduceSetAccordionState(state, accordionState) {

        return update(state, { [accordionState.id]: { $set: accordionState.state }})
    }
}

export default AccordionViewStateReducer