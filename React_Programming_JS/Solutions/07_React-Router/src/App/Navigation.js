// Navigation.jsx
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Navigation extends Component {

	constructor(props) {
		
		super(props)

		this.createNavigationBar = this.createNavigationBar.bind(this)
		this.pushCheckout = this.pushCheckout.bind(this)
		this.pushHome = this.pushHome.bind(this)
		this.pushMenu = this.pushMenu.bind(this)
		
		this.NavWithRouter = withRouter(this.createNavigationBar)
	}

	createNavigationBar(props) {

		this.history = props.history

		return (
			<div className="navigation">
				<button className={ `${ props.location.pathname === '/' ? 'navbutton-selected' : 'navbutton' }` }
					onClick={ this.pushHome }>Home</button>
				<button className={ `${ props.location.pathname === '/menu' ? 'navbutton-selected' : 'navbutton' }` }
					onClick={ this.pushMenu }>Menu</button>
				<button className={ `${ props.location.pathname === '/checkout' ? 'navbutton-selected' : 'navbutton' }` }
					onClick={ this.pushCheckout }>Checkout</button>
			</div>
		)

		// Alternative form using Link instead of history and calling onClick. This is probably what we would have gone
		// with in a read application:

		/*
		return (
			<div className="navigation">
				<Link to="/"><button className={ `${ props.location.pathname === '/' ? 'navbutton-selected' : 'navbutton' }` }>Home</button></Link>
				<Link to="/menu"<button className={ `${ props.location.pathname === '/menu' ? 'navbutton-selected' : 'navbutton' }` }>Menu</button></Link>
				<Link to="/checkout"><button className={ `${ props.location.pathname === '/checkout' ? 'navbutton-selected' : 'navbutton' }` }>Checkout</button></Link>
			</div>
		)
		*/
	}

    render() {

		// NavWithRouter is assigned to a local variable because this.NavWithRouter is not acceptable
		// as a tag name in JSX.

		const NavWithRouter = this.NavWithRouter

		return <NavWithRouter />
	}
	
	pushHome() {

		this.history.push('/')
	}

	pushMenu() {

		this.history.push('/menu')
	}

	pushCheckout() {

		this.history.push('/checkout')
	}
}

export default Navigation