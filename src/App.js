import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Qoutes from "./component/qoutes"
import quotesData from "./assets/quote.json"

function App() {
  return (
   <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qoutes"
         element={<Qoutes quotes={quotesData.quotes}/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
