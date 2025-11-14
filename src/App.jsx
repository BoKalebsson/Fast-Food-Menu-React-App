import { useEffect, useState } from "react";
import Layout from "./layout/Layout";

function App() {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return <Layout theme={theme} onToggleTheme={handleToggleTheme} />;
}

export default App;
