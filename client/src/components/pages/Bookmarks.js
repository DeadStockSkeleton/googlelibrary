import HomeBtn from "../HomeBtn/HomeBtn";
function Bookmarks(props) {
  console.log(props.bookmarks);
  return (
    <>
      <HomeBtn />
      <div className="container mx-auto p-3">
        <h1>Bookmarks ({props.bookmarks.length})</h1>
        {props.bookmarks ? (
          props.bookmarks.map((book, i) => (
            <div key={i} class="card border-0 mt-3">
              <div class="card-header  bg-white border-0 ">
                <h3>{book.title}</h3>
                <small className="text-muted">by {book.authors}</small>
                <small className="text-muted  float-end position-absolute top-0 end-0">
                  <button
                    class={"unbookmark" + i}
                    onClick={() => {
                        props.unbook(book._id)
                      }}
                    id={"bk" + i}
                    className="btn text-muted"
                  >
                    <i class="fas fa-bookmark"></i>
                  </button>
                </small>
              </div>{" "}
              <div class="card-body">
                <div className="row w-25 col-1 ">
                  <img src={book.img} alt="book cover" />
                </div>

                <p class="card-text">{book.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <h3>No Favorites</h3>
        )}
      </div>
    </>
  );
}

export default Bookmarks;
