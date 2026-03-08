import { Link } from "react-router-dom"

type NavbarProps = {
    showSignIn?: boolean;
}

function Navbar({ showSignIn = false }: NavbarProps){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <h1>
                    Acharya AI
                </h1>
                {showSignIn && (
                    <Link to="/" className="my-button-2">
                        Sign In
                    </Link>
                )}
                
            </div>
        </nav>
    );
}

export default Navbar;