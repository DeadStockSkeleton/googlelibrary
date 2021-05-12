import { Link } from "react-router-dom";
function HomeBtn() {
    return (
        <>
        <Link className="btn HomeBtn border-rounded text-light bg-primary" to='/'>
        <i class="fas fa-search"></i> Search
        </Link>
      </>
    );
  }
  
  export default HomeBtn;