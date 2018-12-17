// AccordionActionController.js
// Copyright © NextStep IT Training. All rights reserved.
//

import { createModelAction } from '../model/ModelAction'
import AccordionActionType from './AccordionActionType'

class AccordionActionController {

    constructor(dispatch) {

        this.dispatch = dispatch
    }

    setAccordionState(accordionState) {

        this.dispatch(createModelAction(AccordionActionType.SET_ACCORDION_STATE_ACTION, accordionState))
    }
}

export default AccordionActionController