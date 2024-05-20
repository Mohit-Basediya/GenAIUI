import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const FrontLayout = React.lazy(() =>
  import("./components/FrontLayout")
);

function App() {
  return (
    <BrowserRouter>
      <FrontLayout />
    </BrowserRouter>
  );
}

export default App;
