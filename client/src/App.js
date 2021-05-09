import React from "react";
import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Bookmarks from './components/pages/Bookmarks';
function App(){
    return (
        <><Router>
          <Navbar/>
          <Container>
          <Route exact path='/' component={Home}/>
          <Route exact path='/bookmarks' component={Bookmarks}/>
          </Container></Router>
        </>
        );
        
      }
      
      export default App;