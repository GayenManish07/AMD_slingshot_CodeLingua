import { Link } from "react-router-dom"

type NavbarProps = {
    showSignIn?: boolean;
}

function Navbar({ showSignIn = false }: NavbarProps){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <h1>
                        CodeLingua
                    </h1>
                </Link>
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