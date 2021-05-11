import React from "react";
import bookmarks from '../BookmarkBtn/BookmarkBtn'
import API from '../../utils/API'
function Home(props) {
  function getImg(img) {
    if (img) {
      return (
        <img width="100%" className="m-3"
          src={img.thumbnail}
          alt="book cover"
        />
      );
    }else{
      return;
    }
  }
  function getLength(length){
    if (length.length === 0 || length === undefined){
      return;
    }else{
return (<p className="text-muted">
          About {length.length} results for "{props.query}"
        </p>)
    }
  }

  function bookmark(book){
    const bookData = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      desc: book.volumeInfo.description,
      img: book.volumeInfo.imageLinks.thumbnail,
      url: book.volumeInfo.infoLink,
    };
console.log(bookData);
    API.bookmark(bookData).then((res)=> {
      
    })
  }
  return (
    <>
      <div className="container mx-auto p-3">
        {getLength(props.search)}
        {props.search.length ? (
          props.search.map((book, i) => (
            <div key={i} class="card border-0 mt-3">
              <div class="card-header  bg-white border-0 ">
                <h3>{book.volumeInfo.title}</h3><small className="text-muted">by{book.volumeInfo.authors.map((author) => {
                  return (", "+author)
                })}</small>
                <small className="text-muted  float-end position-absolute top-0 end-0">
                  <button onClick={() => {
                    
                      bookmark(props.search[i]);
                    }} id={i} className="btn text-muted">
                    <i class="far fa-bookmark"></i>
                  </button>
                </small>
              </div>{" "}
              <div class="card-body">
                <div className="row w-25 col-1 ">{getImg(book.volumeInfo.imageLinks)}</div>
      
                <p class="card-text">{book.volumeInfo.description}</p>
              </div>
            </div>
          ))
        ) : (
          <h3>No Results</h3>
        )}
        <bookmarks />
      </div>
    </>
  );
}

export default Home;
