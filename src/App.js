import "./App.css";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { Home } from "./pages/Home/home";
import { About } from "./pages/About/about";
import { Nav } from "./Header/Nav";
import { Contact } from "./pages/Contact/contact";
import { QueryClientProvider , QueryClient } from "@tanstack/react-query";
 function App() {
  const Client = new QueryClient()
   return (
    <div className="App">
      <QueryClientProvider client={Client}>
       <Router>
        <Nav/> 
         <Routes>
          <Route></Route>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/about" element={<About/>}> </Route>
        </Routes>
      </Router>
      </QueryClientProvider>
     </div>
  );
}

export default App;