import { Link } from "react-router-dom";
function BookmarkBtn() {
    return (
        <>
        <button className="btn bookmarkBtn text-light bg-primary" to='/bookmarks'>
        <i class="far fa-bookmark"></i>
        </button>
      </>
    );
  }
  
  export default BookmarkBtn;