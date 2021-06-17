const Navbar = (props) => {
    return ( 
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <span className="badge badge-primary"> {props.productCount} </span>
            </nav>
        </div>
     );
}
export default Navbar;