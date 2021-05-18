import React, { useState, useEffect } from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Bookmarks from './components/pages/Bookmarks';
import API from './utils/API';
function App(){
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [bookmarks, setBookmarks] = useState([])
  function handleSearch({target}){
    setSearch(target.value);
    
  }

  function submit(){
    API.searchBook(search).then((data) =>{
      return data.json()
    }).then((res)=>{
      setBooks(res.items)
      console.log("Books: "+books)
    }).catch((err)=>{
      console.log(err);
    })
  }

  function unbook(id){
    API.removeBook(id).then((data)=>{
      window.location.reload();
    })
  }
function getBkm(){
  API.getBooks().then(data => data.json())
  .then((res)=>{setBookmarks(res)
    console.log(bookmarks)})
      
    .catch((err)=>{
      console.log(err);
    })
}
  useEffect(()=> {
    getBkm()
  }, [])
  

  
    return (
        <><Router>
          <Navbar submitBtn={submit} handleSearch={handleSearch}/>
          <Route exact path='/'>
            <Home getBkm={getBkm} bookmarks={bookmarks} query={search} search={books}/>
          </Route>
          <Route exact path='/bookmarks'>
            <Bookmarks  unbook={unbook} bookmarks={bookmarks} query={search} search={books}/>
          </Route>
          </Router>
        </>
        );
        
      }
      
      export default App;