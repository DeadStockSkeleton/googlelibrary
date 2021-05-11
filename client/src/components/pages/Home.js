import React, { useEffect, useState } from "react";
function Home(props) {
  
    return (
        <>
        <div className="container mx-auto p-3">
           {props.search.map((book , i)=> (
             <div key={i} class="card border-0 mt-3">
             <div class="card-header  bg-white border-0 ">
               {book.volumeInfo.title}
               <small className="text-muted  float-end position-absolute top-0 end-0"><button className="btn text-muted"><i class="far fa-bookmark"></i></button></small>
             </div>
             <div class="card-body">
               <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
               <h5 class="card-title">Special title treatment</h5>
               <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
             </div>
           </div>
           ))} 
        </div>
      </>
    );
  }
  
  export default Home;