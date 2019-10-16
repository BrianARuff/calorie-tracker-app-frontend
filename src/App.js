import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import ErrorBoundary from "./Error/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default function AppWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
