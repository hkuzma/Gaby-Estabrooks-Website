import { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './css/app.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './Pages/Contact';

function App() {
  


   
  return (
    <Router> 
      <Nav></Nav>

    
        <Switch>
          <Route path="/page2">
            <div>
              HELLO
            </div>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          

        </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
