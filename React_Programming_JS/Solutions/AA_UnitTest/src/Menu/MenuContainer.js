// MenuContainer.js
// Copyright © NextStep IT Training. All rights reserved.
//
// This class is not used, but is an example of how a wrapping component could be used
// to map the state and dispatch external to the Menu class. The reason for doing
// this would be to keep the decision about where the data comes from in the store away
// from the Menu component. The argument against is that the Menu component needs
// to know about the store (via the action-creator), so what is the point? This class
// would replace Menu in Main.js: import Menu from '../Menu/MenuContainer'
//

import { connect } from "react-redux";

import Menu from '../Menu/Menu'
import OrderActionCreator from "../Model/OrderActionCreator";
import ProductActionCreator from "../Model/ProductActionCreator";

class MenuContainer {

    mapStateToProps(state, ownProps) {

        return {

            beverages: state.product.beverages,
            beveragesError: state.product.beveragesError,
            pastries: state.product.pastries,
            pastriesError: state.product.pastriesError,
            order: state.order
        }
    }

    mapDispatchToProps(dispatch, ownProps) {

        return {

            orderActionCreator: new OrderActionCreator(dispatch),
            productActionCreator: new ProductActionCreator(dispatch)
        }
    }

}

let mc = new MenuContainer()

export default connect(mc.mapStateToProps, mc.mapDispatchToProps)(Menu)