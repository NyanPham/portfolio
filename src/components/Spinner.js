import React from 'react';
import '../styles/SpinnerStyle.css'

export default function Spinner() {
    return (
        <div id="spinner">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
        </div>
    )
}
