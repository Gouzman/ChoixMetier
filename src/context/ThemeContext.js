import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext, useMemo } from "react";
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);
    return (_jsx(ThemeContext.Provider, { value: contextValue, children: children }));
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
