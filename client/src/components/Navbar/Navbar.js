import BookmarkBtn from '../BookmarkBtn/BookmarkBtn'
function Navbar(props) {
    return (
        <>
        <nav className="navbar sticky-top bg-white border-bottom">
          <div class="container-fluid">
            <h1 className="text-dark nav-text"><i class="fas text-danger fa-bookmark m-3"></i><b>Google</b><small className="text-primary">Library</small></h1>
            <div class="input-group w-50 mb-3">
              <input onKeyUp={props.handleSearch} autoComplete="off" type="search" placeholder="Search for a book" id="search" className="form-control px-3  bg-light mx-auto w-50  border-black text-dark mx-auto w-50"/>
                <button className="btn bg-primary text-light" onClick={props.submitBtn}> Search</button>
            </div>
                
          </div>
          
                
        </nav>
      </>
    );
  }
  
  export default Navbar;