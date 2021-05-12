import React, { useState, useRef } from "react";
import Bookmarks from "../BookmarkBtn/BookmarkBtn";
import API from "../../utils/API";
import { ConnectionStates } from "mongoose";
function Home(props) {
  function getImg(img) {
    if (img) {
      return (
        <img
          width="100%"
          className="m-3"
          src={img.thumbnail}
          alt="book cover"
        />
      );
    } else {
      return;
    }
  }
  function getLength(length) {
    if (length) {
      if (length.length === 0 || length === undefined) {
        return;
      } else {
        return (
          <p className="text-muted">
            About {length.length} results for "{props.query}"
          </p>
        );
      }
    } else {
      return;
    }
  }


  function bookmark(book, i) {
    console.log(props.bookmarks);

    const bookData = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      desc: book.volumeInfo.description,
      img: book.volumeInfo.imageLinks.thumbnail,
      url: book.volumeInfo.infoLink,
    };
      API.bookmark(JSON.stringify(bookData))
     const target = document.querySelector(".bookmark" + i ).classList.add('display') 
    
  }

  function signal2(book, i) {
    if (props.bookmarks.some((o) => o.title === book.volumeInfo.title)) {
      return (
        <button
          id={"bk" + i}
          className={"btn display text-muted"}
        >
          <i class="fas fa-bookmark"></i>
        </button>
      );
    }
    return (
      <button
        onClick={() => {
          bookmark(book, i);
        }}
        id={"bk" + i}
        className={"bookmark" + i + " btn text-muted"}
      >
        <i class="far fa-bookmark"></i>
      </button>
    );
  }



  return (
    <>
      <Bookmarks getBkm={props.getBkm} />
      <div className="container mx-auto p-3">
        {getLength(props.search)}
        {props.search ? (
          props.search.map((book, i) => (
            <div key={i} class="card border-0 mt-3">
              <div class="card-header  bg-white border-0 ">
                <h3>{book.volumeInfo.title}</h3>
                <small className="text-muted">
                  by
                  {book.volumeInfo.authors ? (
                    book.volumeInfo.authors.map((author) => {
                      return ", " + author;
                    })
                  ) : (
                    <small>Unknown</small>
                  )}
                </small>
                <div className="text-muted  float-end position-absolute top-0 end-0">
                  {signal2(props.search[i], i)}
                </div>
              </div>{" "}
              <div class="card-body">
                <div className="row w-25 col-1 ">
                  {getImg(book.volumeInfo.imageLinks)}
                </div>

                <p class="card-text">{book.volumeInfo.description}</p>
              </div>
            </div>
          ))
        ) : (
          <h3>No Results</h3>
        )}
        
      </div>
    </>
  );
}

export default Home;
