import "./App.css";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { Home } from "./pages/Home/home";
import { About } from "./pages/About/about";
import { Contact } from "./pages/Contact/contact";
 function App() {
   return (
    <div className="App">
       <Router>
        <Nav/> 
        <Welcome/>
        <Routes>
          <Route></Route>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/about" element={<About/>}> </Route>
        </Routes>
      </Router>
     </div>
  );
}

export default App;