import React from "react"
import Logo from "../images/images2.png"
import Log from "../images/images.png"

const Navbar = (props) => {
	return (
		<div className='Navbar'>
			<img src={Logo} alt='logo' className='Logo' />
			<h1>ReactFacts</h1>
			<button onClick={props.toggle} className='btn'></button>
		</div>
	)
}

export default Navbar
