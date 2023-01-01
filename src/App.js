
import './App.css';
import Home from './pages/Home';
import Term from './pages/Term';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
function App() {
  
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/term" exact component={() => <Term />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
