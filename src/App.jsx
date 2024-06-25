import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./component/Navbar";
import News from "./component/News";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("in"); 
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              category="general"
              selectedCountry={selectedCountry}
              progress={setProgress}
            />
          } 
        />
        <Route
          path="/entertainment"
          element={
            <News
              category="entertainment"
              selectedCountry={selectedCountry}
              progress={setProgress}
            />
          } 
        />
        <Route
          path="/health"
          element={
            <News
              category="health"
              selectedCountry={selectedCountry}
              progress={setProgress}
            />
          } 
        />
        <Route
          path="/science"
          element={
            <News
              category="science"
              selectedCountry={selectedCountry}
              progress={setProgress}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              category="sports"
              selectedCountry={selectedCountry}
              progress={setProgress}
            />
          } 
        />
        <Route
          path="/technology"
          element={
            <News
              category="technology"
              selectedCountry={selectedCountry}
              progress={setProgress}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
