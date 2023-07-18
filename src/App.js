import { useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  /* dark mode states */
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-darkCol dark:bg-darkCol dark:text-white">
        {/* components here... */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
