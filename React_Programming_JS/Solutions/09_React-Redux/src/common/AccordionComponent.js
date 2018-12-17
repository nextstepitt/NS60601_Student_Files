// AccordionComponent.js
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import '../assets/styles/application.css'
import AccordionActionController from './AccordionActionController'
import AccordionViewState from './AccordionViewState'

class AccordionComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {

            display: false
        }

        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    componentDidMount() {

        let open = false;

        if (this.props.open !== undefined) {

            open = this.props.open
        }

        if (this.props.id && this.props.accordionStates) {

            open = this.props.accordionStates[this.props.id]
        }

        this.setState({ display: open })
    }

    static get defaultProps() {

        return {

            open: true
        }
    }

    static mapStateToProps(state, ownProps) {

        return {

            accordionStates: state.accordionStates
        }
    }

    static mapDispatchToProps(dispatch, ownProps) {

        return {

            accordionActionController: new AccordionActionController(dispatch)
        }
    }

    static get propTypes() {

        return {

            accordionActionController: PropTypes.instanceOf(AccordionActionController),
            accordionStates: PropTypes.instanceOf(AccordionViewState),
            id: PropTypes.string,
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

        let newDisplayState = !this.state.display

        if (this.props.id && this.props.accordionActionController) {

            this.props.accordionActionController.setAccordionState({ id: this.props.id, state: newDisplayState })
        }

        this.setState( { display: newDisplayState } )
    }
}

export default connect(AccordionComponent.mapStateToProps, AccordionComponent.mapDispatchToProps)(AccordionComponent)