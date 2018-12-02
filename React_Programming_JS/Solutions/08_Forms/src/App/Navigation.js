// Navigation.jsx
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Navigation extends Component {

	constructor(props) {
		
		super(props)

		this.pushCheckout = this.pushCheckout.bind(this)
		this.pushHome = this.pushHome.bind(this)
		this.pushMenu = this.pushMenu.bind(this)
		
		this.NavWithRouter = withRouter((props) => {

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
		})
	}

    render() {

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