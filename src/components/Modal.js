import React, { useEffect } from 'react';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/ModalStyle.css'

export default function Modal({openModal, closeModal , error, message}) {

    useEffect(() => {
        if (!openModal) return
        if (error && message === '') return
        const timeToClose = setTimeout(closeModal, 3000)

        return () => clearTimeout(timeToClose)
    }, [openModal, closeModal, error, message])

    return (
        <div id='modal-box' className={`${openModal ? 'show' : ''}`}>
            {error && (
                <div className="error-message">
                    <div className="circle">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    
                    <span>{error}</span>
                </div>  
            ) }
            {message && 
                <div className='success-message'>
                    <div className="circle">
                        <FontAwesomeIcon icon={faCheck} />                     
                    </div>
                    <span>{message}</span>
                </div>
            }
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
        </div>
    )
}
