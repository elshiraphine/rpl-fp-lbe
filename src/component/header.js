import { Link } from "react-router-dom";

const header = () =>{
    return(
        <div>
            <Link to="/">Learn</Link>
            <Link to="/alert">Alert</Link>
        </div>
    )
}

export default header;