import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"

const App = () => {
	const [theme, setTheme] = useState("light")
	function toggle() {
		if (theme === "light") {
			setTheme("dark")
		} else {
			setTheme("light")
		}
	}

	useEffect(() => {
		document.body.className = theme
	}, [theme])

	return (
		<div className='container'>
			<Navbar toggle={toggle} />
			<Main />
		</div>
	)
}

export default App
