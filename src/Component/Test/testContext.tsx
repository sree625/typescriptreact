import React, { createContext, useState } from 'react'

// Create the context
export const AppContext = createContext()

type AppProviderContext = {
    children: React.ReactNode
}

// Create the provider
export const AppProvider = ({ children }: AppProviderContext) => {
    const [theme, setTheme] = useState('light') // Default theme is "light"

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    )
}
