import React, {Component} from 'react'
import { FaBars } from 'react-icons/fa'

class Dropdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			toggle: false
		}
	}
	toggle() {
		const { toggle } = this.state

		this.setState({ toggle: !toggle })
	}
	render() {
		let visible = 'hidden'
		if (this.state.toggle)
			visible = '' 

		return (
			<div className="dropdown-container">
			  <span 
			  	className="icon-hamburger"
			  	onClick={this.toggle.bind(this)}
			  >
	        <FaBars 
	          size="35px"
	          color="#000"
	        />
	      </span>
	      <div className={`menu-content ${visible}`}>
	      	{this.props.children}
	    	</div>
	    </div>
		)
	}
}

export default Dropdown
