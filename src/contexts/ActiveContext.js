import React, { useState, useContext, createContext, useEffect, useRef, createRef } from 'react'

const ActiveContext = createContext()
export const useActive = () => useContext(ActiveContext)


export default function ActiveProvider({ children }) {
    const [activeSection, setActiveSection] = useState('home')

    return (
        <ActiveContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveContext.Provider>
    )
}