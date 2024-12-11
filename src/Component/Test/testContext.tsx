import React, { createContext, useState } from 'react'

// Create the context

type ProvideContext = {
    theme: string
    toggleTheme: () => void
}
const defaultProps = {
    theme: 'reset',
    toggleTheme: () => console.log('hell'),
}
export const AppContext = createContext<ProvideContext>(defaultProps)

type AppProviderContext = {
    children: React.ReactNode
}

// Create the provider
export const AppProvider = ({ children }: AppProviderContext) => {
    const [theme, setTheme] = useState<string>('light') // Default theme is "light"

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    )
}
