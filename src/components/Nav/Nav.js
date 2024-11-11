import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul className="d-flex flex-wrap list-unstyled mb-0 justify-content-center justify-content-md-end">
                <li><a href="#home" className="px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover">Home</a></li>
                <li><a href="#about" className="px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover">About</a></li>
                <li><a href="#menu" className="px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover">Menu</a></li>
                <li><a href="#reservations" className="px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover">Reservations</a></li>
                <li><a href="#orderOnline" className="px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover">Order Online</a></li>
                <li><a href="#login" className="px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
