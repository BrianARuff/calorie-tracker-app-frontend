import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import ErrorBoundary from "./Error/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
    </div>
  );
}

export default App;
