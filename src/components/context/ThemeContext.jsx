import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    body.style.transition = "background-color 0.5s ease, color 0.5s ease";

    if (theme === "dark") {
      root.classList.add("dark");
      body.classList.add("bg-gray-900", "text-white");
      body.classList.remove("bg-white", "text-black");
    } else {
      root.classList.remove("dark");
      body.classList.add("bg-white", "text-black");
      body.classList.remove("bg-gray-900", "text-white");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
