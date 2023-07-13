import { Link } from "react-router-dom"

let Nav=()=>{
    return(
        <div className="linkmain">
            <Link to="/">Home</Link>
            <Link to="/Cart">Cart</Link>

        </div>
    )

}
export default Nav;