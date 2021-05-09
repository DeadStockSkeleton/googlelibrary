import BookmarkBtn from '../BookmarkBtn/BookmarkBtn'
function Navbar() {
    return (
        <>
        <nav className="navbar bg-dark sticky-top border-bottom">
          <div class="container-fluid">
            <h1 className="text-light"><i class="fas text-danger fa-bookmark m-3"></i>Google<b className="text-primary">Library</b></h1>
                <input autoComplete="off" type="search" placeholder="search" id="search" className="form-control px-3 border-0 search-input border-black text-light mx-auto w-50"/>
          <BookmarkBtn />
          </div>
          
                
        </nav>
      </>
    );
  }
  
  export default Navbar;