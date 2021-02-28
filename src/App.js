import React, { Suspense } from "react";
import {BrowserRouter as Router} from "react-router-dom";
// import './App.css';
import Routing from "./_Service/Routing";

function App() {
  return (
    <Router>
      <Suspense fallback={() => <div>loading ...</div>}>
        <Routing />
      </Suspense>
    </Router>
  );
}

export default App;
