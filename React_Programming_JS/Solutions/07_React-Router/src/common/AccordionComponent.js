// AccordionComponent.js
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../assets/styles/application.css'

class AccoridonComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {

            display: props.open
        }

        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    static get defaultProps() {

        return {

            open: true
        }
    }

    static get propTypes() {

        return {

            open: PropTypes.bool,
            title: PropTypes.string.isRequired
        }
    }

    render() {

        let content = null;
        
        if (this.state.display) {
            
            content = this.props.children
        }

        return (
            <div className='list'>
                <div className={ `list-title ${ this.state.display ? '' : 'list-title-closed' }` } onClick={ this.toggleDisplay }>
                    &nbsp;{ this.props.title }
                </div>
                { content }
            </div>
        )
    }

    toggleDisplay(event) {

        this.setState( { display: !this.state.display } )
    }
}

export default AccoridonComponent