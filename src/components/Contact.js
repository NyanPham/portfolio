import React, { useState } from 'react';
import '../styles/ContactStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
		const [senderName, setSenderName] = useState('')
		const [senderEmail, setSenderEmail] = useState('')
		const [message, setMessage] = useState('')

		return (
			<section id="contact">
				<h2>Contact me</h2>
				<div className="contact-container">						
					<form className="contact-form">
						<div className="field name-field">
							<input type="text" 
								value={senderName} 
								onChange={(e) => setSenderName(e.target.value)}
							/>
							<span>Name</span>
						</div>
						<div className="field email-field">
							<input type="email" 
								value={senderEmail}
								onChange={(e) => setSenderEmail(e.target.value)}
							/>
							<span>Email</span>
						</div>
						<div className="field message-field">
							<textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
							<span>Message</span>
						</div>
						<button className="send-btn" type="submit">
							<span>Send message</span>
							<FontAwesomeIcon icon={faPaperPlane} />
						</button>
					</form>
					<div className="contact-methods">
						<div className="contact-method">
							<FontAwesomeIcon icon={faEnvelope} className="method-icon" />
							<div className="method-name">Email</div>
							<p className="method-text">nyanphamdev@gmail.com</p>
						</div>
						<div className="contact-method">
							<FontAwesomeIcon icon={faPhone} className="method-icon" />
							<div className="method-name">Phone call</div>
							<p className="method-text">0947-057-091</p>
						</div>
						<div className="contact-method">
							<FontAwesomeIcon icon={faMapMarkerAlt} className="method-icon" />
							<div className="method-name">Location</div>
							<p className="method-text">Binh Thanh Dist, HCMC</p>
						</div>
					</div>
				</div>
			</section>
		)
}
