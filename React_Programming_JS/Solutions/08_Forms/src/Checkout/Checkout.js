// Checkout.js
// Copyright (c) 2017-2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import Validator, { cardNumberValidator } from 'react-data-validator'
import { Link, withRouter } from 'react-router-dom'

import '../assets/styles/application.css'
import cart from '../cart/cart'
import CartList from './CartList'

class Checkout extends Component {

    constructor(props) {

        super(props)

        this.onChangeCardNumber = this.onChangeCardNumber.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.setCardNumberValidationState = this.setCardNumberValidationState.bind(this)
        this.setNameValidationState = this.setNameValidationState.bind(this)

        this.state = {

            name: '',
            nameIsValid: true,
            cardNumber: '',
            cardNumberIsValid: true
        }
    }

    checkout(props) {

        if (this.isValid()) {

            cart.clear()
            props.history.push("/Menu")
        }
    }

    isValid() {

        return this.state.cardNumberIsValid && this.state.nameIsValid
    }

    onChangeCardNumber(event) {

        this.setState({ cardNumber: event.target.value })
    }

    onChangeName(event) {

        this.setState({ name: event.target.value })
    }

    render() {

        let SubmitButton = cart.entries.length && this.isValid() ? withRouter( (props) => <input type="button" value="Submit" onClick={ () => this.checkout(props) } /> ) : () => null

        return (
            <div>
                <h1>Checkout</h1>
                <CartList />
                <form>
                    <Validator className="cc-form-errors" value={ this.state.name } isRequired={ true } renderOnEmpty={ true } constraint={ /^[A-Za-z][a-z]+( [A-Za-z]\.?)? [A-Za-z][a-z]+/ } currentState={ this.state.nameIsValid } notify={ this.setNameValidationState }>Provide a first and last name with initial capital letters, an uppercase middle intitial is permitted.</Validator><br />
                    <Validator className="cc-form-errors" value={ this.state.cardNumber } isRequired={ true } renderOnEmpty={ true } constraint={ [ /^\d{12,19}$/, cardNumberValidator ] } currentState={ this.state.cardNumberIsValid } notify={ this.setCardNumberValidationState }>Please enter a valid card number.</Validator><br />
                    <div className="cc-form">
                        <div className="cc-form-row">
                            <div className="cc-form-label"><label className="cc-form-label">Name:</label></div>
                            <div className="cc-form-field"><input type="text" className={ 'cc-form-field ' + ( this.state.nameIsValid ? 'cc-form-field-requirement-met' : 'cc-form-field-required' ) } value={ this.state.name } onChange={ this.onChangeName } /></div>
                            <div className="clear-all"></div>
                        </div>
                        <div className="cc-form-row">
                            <div className="cc-form-label"><label className="cc-form-label">Card Number:</label></div>
                            <div className="cc-form-field"><input type="text" className={ 'cc-form-field ' + ( this.state.cardNumberIsValid ? 'cc-form-field-requirement-met' : 'cc-form-field-required' ) } value={ this.state.cardNumber } onChange={ this.onChangeCardNumber } /></div>
                            <div className="clear-all"></div>
                        </div>
                        <div className="cc-form-row">
                            <div className="cc-form-label"></div>
                            <div className="cc-form-field">
                                <Link to="/Menu"><button>Cancel</button></Link>&nbsp;
                                <SubmitButton />
                            </div>
                            <div className="clear-all"></div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    setCardNumberValidationState(valid) {

        if (this.state.cardNumberIsValid !== valid) {

            this.setState( { cardNumberIsValid: valid })
        }

    }

    setNameValidationState(valid) {

        if (this.state.NameIsValid !== valid) {

            this.setState( { nameIsValid: valid })
        }
    }

}

export default Checkout