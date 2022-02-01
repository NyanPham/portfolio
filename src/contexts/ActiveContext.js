import React, { useState, useContext, createContext, useEffect, useRef, createRef } from 'react'

const ActiveContext = createContext()
export const useActive = () => useContext(ActiveContext)


export default function ActiveProvider({ children }) {
    const [activeSection, setActiceSection] = useState('home')

    return (
        <ActiveContext.Provider value={{ activeSection }}>
            {children}
        </ActiveContext.Provider>
    )
}