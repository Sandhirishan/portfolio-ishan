import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./coponents/LoadingScreen";
import { Navbar } from "./coponents/Navbar";
import { MobileMenu } from "./coponents/MobileMenu";
import { Home } from "./coponents/sections/Home";
import { About } from "./coponents/sections/About"; 
import { Projects } from "./coponents/sections/Projects";
 import { Contact } from "./coponents/sections/Contact"; 


import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        
        <Contact />

      </div>
    </>
  );
}

export default App;
