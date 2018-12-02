// Checkout.js
// Copyright (c) 2017-2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import Validator from 'react-data-validator'
import { Link, withRouter } from 'react-router-dom'

import '../Assets/styles/application.css'
import cart from '../Cart/cart'
import CartList from './CartList'

class Checkout extends Component {

    constructor(props) {

        super(props)

        this.onCardNumberInvalid = this.onCardNumberInvalid.bind(this)
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onNameInvalid = this.onNameInvalid.bind(this)

        this.state = {

            name: '',
            nameIsValid: true,
            cardNumber: '',
            cardNumberIsValid: true
        }

        this.checkout = this.checkout.bind(this)
    }

    render() {

        this.cardNumberIsValid = true
        this.nameIsValid = true

        let SubmitButton = cart.entries.length && this.isValid() ? withRouter( (props) => <input type="button" value="Submit" onClick={ () => this.checkout(props) } /> ) : () => null

        return (
            <div>
                <h1>Checkout</h1>
                <CartList />
                <form>
                    <Validator className="cc-form-errors" value={ this.state.name } isRequired={ true } renderOnEmpty={ true } constraint={ /^[A-Za-z][a-z]+( [A-Za-z]\.?)? [A-Za-z][a-z]+/ } notify={ this.onNameInvalid }>Provide a first and last name with initial capital letters, an uppercase middle intitial is permitted.</Validator><br />
                    <Validator className="cc-form-errors" value={ this.state.cardNumber } isRequired={ true } renderOnEmpty={ true } constraint={ /^\d{12,19}$/ } notify={ this.onCardNumberInvalid }>Please enter a valid card number.</Validator><br />
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

    checkout(props) {

        if (this.isValid()) {

            cart.clear()
            props.history.push("/Menu")
        }

        this.setState({ error: true })
    }

    componentDidMount() {

        this.setValidState()
    }

    componentDidUpdate() {

        this.setValidState()
    }

    isValid() {

        return this.state.cardNumberIsValid && this.state.nameIsValid
    }

    onCardNumberInvalid() {

        this.cardNumberIsValid = false
    }

    onChangeCardNumber(event) {

        this.setState({ cardNumber: event.target.value })
    }

    onChangeName(event) {

        this.setState({ name: event.target.value })
    }

    onNameInvalid() {

        this.nameIsValid = false
    }

    setValidState() {

        if (this.state.cardNumberIsValid !== this.cardNumberIsValid ||
            this.state.nameIsValid !== this.nameIsValid) {

            this.setState({
                cardNumberIsValid: this.cardNumberIsValid,
                nameIsValid: this.nameIsValid
            })
        }
    }
}

export default Checkout