import BookmarkBtn from '../BookmarkBtn/BookmarkBtn'
function Navbar(props) {
    return (
        <>
        <nav className="navbar sticky-top bg-white border-bottom">
          <div class="container-fluid">
            <h1 className="text-dark nav-text"><i class="fas text-danger fa-bookmark m-3"></i><b>Google</b><small className="text-primary">Library</small></h1>
                <input onChange={props.handleSearch} autoComplete="off" type="search" placeholder="search" id="search" className="form-control px-3 border-0 bg-light mx-auto w-50  border-black text-dark mx-auto w-50"/>
                <button className="btn" onClick={props.submitBtn}><i class="fas fa-search"></i></button>
          <BookmarkBtn />
          </div>
          
                
        </nav>
      </>
    );
  }
  
  export default Navbar;