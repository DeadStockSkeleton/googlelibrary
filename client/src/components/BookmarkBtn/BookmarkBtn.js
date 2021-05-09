import { Link } from "react-router-dom";
function BookmarkBtn() {
    return (
        <>
        <Link className="btn text-light btn-outline-light" to='/bookmarks'>
        <i class="far fa-bookmark"></i>
        </Link>
      </>
    );
  }
  
  export default BookmarkBtn;