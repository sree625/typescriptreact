import React, { createContext, useState } from 'react'

type AppProviderProps = {
    children: React.ReactNode
}
type AppContextType = {
    theme: string
    toggleTheme: () => void
}

const defaultProps: AppContextType = {
    theme: 'dark',
    toggleTheme: () => console.log('hell'),
}

// Create the context
export const AppContext = createContext<AppContextType>(defaultProps)

// Create the provider
export const AppProvider = ({ children }: AppProviderProps) => {
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
