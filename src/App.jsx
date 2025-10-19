import { useEffect, useState } from "react";
import MyHeader from "./components/Header";
import Layout from "./components/Layout";
import Learning from "./components/Learning/Learning";
import Calculator from "./components/Calculator";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const preferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && preferDark);

    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Сохраняем в localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Применяем класс к html
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`min-h-screen ${isDark ? "dark bg-cyan-900" : "bg-blue-400"}`}
    >
      <Layout>
        <MyHeader toggleTheme={toggleTheme} isDark={isDark} />

        <Calculator />
      </Layout>
      {/* <Learning /> */}
    </div>
  );
}

export default App;
