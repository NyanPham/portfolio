import React, { useState } from 'react'
import Navbar from "./Navbar";
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer';

function App() {
	const [darkTheme, setDarkTheme] = useState(false)

	function handleThemeChange() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

  	return (
	<div className={`portfolio-app ${darkTheme ? 'dark' : ''}`}>
		<Navbar darkTheme={darkTheme} handleThemeChange={handleThemeChange}/>
		<Home />
		<About />
		<Skills />
		<Portfolio />
		<Contact />
		<Footer />
	</div>
	
  );
}

export default App;
