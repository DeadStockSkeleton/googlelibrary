import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Bookmarks from './components/pages/Bookmarks';
import API from './utils/API';
function App(){
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  
  function handleSearch({target}){
    setSearch(target.value);
    
  }

  function submit(){
    API.searchBook(search).then((data) =>{
      return data.json()
    }).then((res)=>{
      setBooks(res.items)
    }).catch((err)=>{
      console.log(err);
    })
  }
    return (
        <><Router>
          <Navbar submitBtn={submit} handleSearch={handleSearch}/>
          <Route exact path='/'>
            <Home query={search} search={books}/>
          </Route>
          <Route exact path='/bookmarks' component={Bookmarks}/>
          </Router>
        </>
        );
        
      }
      
      export default App;