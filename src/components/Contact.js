import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../styles/ContactStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { addDoc, collection } from 'firebase/firestore' 
import { db } from '../firebase'
import Spinner from './Spinner'
import Modal from './Modal'


export default function Contact() {
	const [senderName, setSenderName] = useState('')
	const [senderEmail, setSenderEmail] = useState('')
	const [senderMessage, setSenderMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [successMessage, setSuccessMessage] = useState('')
	const [openModal, setOpenModal] = useState(false)

	async function handleContactSubmit(e) {
		e.preventDefault()
		
		try {
			setLoading(true)
			setError('')
			await addDoc(collection(db, 'contacts'), {
				from: senderEmail,
				name: senderName,
				message: `${senderName} says:\n\t${senderMessage}`
			})
			setSuccessMessage('Your message has been sent')
		} catch {
			setError('Failed to send message. Please, try again later.')
		}

		setLoading(false)
		setOpenModal(true)
		setSenderName('')
		setSenderEmail('')
		setSenderMessage('')
	}

	return (
		<>
			<section id="contact" >
				<h2>Contact me</h2>
				<div className="contact-container">						
					<form className="contact-form" onSubmit={handleContactSubmit}>
						<div className="field name-field">
							<input type="text" 
								value={senderName} 
								onChange={(e) => setSenderName(e.target.value)}
								required
							/>
							<span className={`custom-placeholder ${senderName.length ? 'hold' : ''}`}>Name</span>
						</div>
						<div className="field email-field">
							<input type="email" 
								value={senderEmail}
								onChange={(e) => setSenderEmail(e.target.value)}
								required
							/>
							<span className={`custom-placeholder ${senderEmail.length ? 'hold' : ''}`}>Email</span>
						</div>
						<div className="field message-field">
							<textarea value={senderMessage} onChange={(e) => setSenderMessage(e.target.value)} required/>
							<span className={`custom-placeholder ${senderMessage.length ? 'hold' : ''}`}>Message</span>
						</div>
						<button className="send-btn" type="submit" disabled={loading}>
							<span>Send message</span>
							<FontAwesomeIcon icon={faPaperPlane} />
						</button>
					</form>

					<div className="contact-methods">
						<ContactMethod methodName="Email" icon={faEnvelope} content="nyanphamdev@gmail.com" />
						<ContactMethod methodName="Phone call" icon={faPhone} content="0947-057-091" />
						<ContactMethod methodName="Location" icon={faMapMarkerAlt} content="Binh Thanh Dist, HCMC" />
					</div>
				</div>
			</section>
			{loading && ReactDOM.createPortal(
				<Spinner />, document.body
			)}
			{ReactDOM.createPortal (
				<Modal 
					openModal={openModal} 
					closeModal={() => setOpenModal(false)} 
					error={error} message={successMessage}
				/>, 
				document.body
			)}
		</>
	)
}

function ContactMethod({methodName, icon, content}) {
	return (
		<div className="contact-method">
			<FontAwesomeIcon icon={icon} className="method-icon" />
			<div className="method-name">{methodName}</div>
			<p className="method-text">{content}</p>
		</div>
	)
}