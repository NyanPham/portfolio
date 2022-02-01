import React from 'react'
import Navbar from "./Navbar";
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer';
import ActiveProvider from '../contexts/ActiveContext'

function App() {
  return (
	
	<div className="portfolio">
		<ActiveProvider>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</ActiveProvider>
	</div>
	
  );
}

export default App;
