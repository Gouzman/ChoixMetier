import { ReactNode } from "react";
interface ThemeContextProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}
export declare const ThemeProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextProps;
export {};
