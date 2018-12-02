// CheckoutContainer.js
// Copyright © NextStep IT Training. All rights reserved.
//
// This class is not used, but is an example of how a wrapping component could be used
// to map the state and dispatch external to the Checkout class. The reason for doing
// this would be to keep the decision about where the data comes from in the store away
// from the Checkout component. The argument against is that the Checkout component needs
// to know about the store (via the action-creator), so what is the point? This class
// would replace Checkout in Main.js: import Checkout from '../Checkout/CheckoutContainer'
//

import { connect } from "react-redux";

import Checkout from '../Checkout/Checkout'
import OrderActionCreator from "../Model/OrderActionCreator";

class CheckoutContainer {

    mapStateToProps(state) {

        return {

            order: state.order
        }
    }

    mapDispatchToProps(dispatch) {

        return {

            orderActionCreator: new OrderActionCreator(dispatch)
        }
    }
}

let cc = new CheckoutContainer()

export default connect(cc.mapStateToProps, cc.mapDispatchToProps)(Checkout)