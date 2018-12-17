// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import React, { Component } from 'react'

import '../assets/styles/application.css'
import dataContext from '../data-access/dataContext'
import ProductList from './ProductList'

class Menu extends Component {

    constructor(props) {

        super(props)

        console.log("Menu: constructor")
    
        this.state = {

            beverages: [],
            pastries: []
        }

        this.mounted = false
    }

    componentDidMount(prevProps, prevState, snapshot) {

        console.log("Menu: componentDidMount")
        this.mounted = true

        this.getBeverages()
        this.getPastries()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("Menu: componentDidUpdate")
    }

    componentWillUnmount() {

        console.log("Menu: componentWillUnmount")

        // Re: mounted. this.isMounted() will also return the mounted state, but when you use it React spews warnings
        // about it constantly. This property is implemented here to shut React up when we get an AJAX response after
        // the component has dismounted and try to call setState. The React documentation keeps insisting that you
        // should cancel any pending action in componentWillDismount, but there isn't any way to cancel a fetch.
        //
        // So how do you handle it in reality? Frameworks like Flux, Redux, and MobX all handle it internally. To be
        // precise, they simply don't call on the component that is dismounted. THe fetch still completes, the results
        // are just ignored.
        //
        // So what is wrong with doing this? Well, a lot: here we are doing it because we know that the AJAX may
        // not finish before component dismounts, so we want a way to know not to call setState. But, that also\
        // masks React warning us about the pending call to setState, and if we are not careful React will not be able
        // to warn us about a problem that really exists. So, the best solution is Flux, Redux, MobX, or something
        // along those lines.
        
        this.mounted = false
    }

    async getBeverages() {

        try {
        
            const receivedBeverages = await dataContext.beverageContext.getBeverages()

            if (this.mounted) {

                this.setState({ beverages: receivedBeverages })
            }
        }

        catch (error) {

            console.log(error)

            if (this.mounted) {

                this.setState({ pastries: [] })
            }
        }
    }

    static getDerivedStateFromProps(props, state) {

        console.log("Menu: getDerivedStateFromProps")

        return null
    }

    async getPastries() {

        try {
        
            const receivedPastries = await dataContext.pastryContext.getPastries()

            if (this.mounted) {
            
                this.setState({ pastries: receivedPastries })
            }
        }

        catch (error) {

            console.log(error)

            if (this.mounted) {

                this.setState({ pastries: [] })
            }
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log("Menu: getSnapshotFromProps")

        return null
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log("Menu: shouldComponentMount")

        return true
    }

    render() {

        console.log("Menu: render")

        return (
            <div className="app-content">
                <h1>Menu</h1>
                <ProductList title="Beverages" products={ this.state.beverages } />
                <ProductList title="Pastries" products={ this.state.pastries } />
            </div>
        )
    }
}

export default Menu