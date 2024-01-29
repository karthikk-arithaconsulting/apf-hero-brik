import { ThemeContextProvider } from "@apf/core";
import { AppWrapper } from "@apf/app-wrapper";
import "@apf/core/dist/style.css";
import "./App.css";
import { useState } from "react";
import InputData from "./data/schema.json";
import React from "react";
import HeroOne from "./components/HeroBrikOne";

function App() {
  const [brikData, setBrikData] = useState(InputData);
  const resetJson = () => setBrikData(InputData);

  return (
    <ThemeContextProvider>
      <AppWrapper
        brikData={brikData}
        resetJson={resetJson}
        handleChange={(value) => setBrikData(value)}
      >
        <div className="App">
         <HeroOne data={brikData}/>
        </div>
      </AppWrapper>
    </ThemeContextProvider>
  );
}

export default App;
