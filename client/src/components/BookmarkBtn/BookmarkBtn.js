import { Link } from "react-router-dom";
function BookmarkBtn(props) {
    return (
        <>
        <Link onClick={()=>{
          {props.getBkm()}
        }} className="btn bookmarkBtn border-rounded text-light bg-primary" to='/bookmarks'>
        <i class="fas fa-bookmark"></i> Bookmarks
        </Link>
      </>
    );
  }
  
  export default BookmarkBtn;