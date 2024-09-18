import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)    
    if (!context) throw new Error('Context error')
    return context
}

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
    const toggleTheme = () => setIsDark(prev => !prev)
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}