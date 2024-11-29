import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const location = useLocation();

    return (
        <nav>
            <ul className="d-flex flex-wrap list-unstyled mb-0 justify-content-center justify-content-md-end">
                <li>
                    <Link
                        to="/"
                        className={`px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={`px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/menu"
                        className={`px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover ${location.pathname === '/menu' ? 'active' : ''}`}
                    >
                        Menu
                    </Link>
                </li>
                <li>
                    <Link
                        to="/reservations"
                        className={`px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover ${location.pathname === '/reservations' ? 'active' : ''}`}
                    >
                        Reservations
                    </Link>
                </li>
                <li>
                    <Link
                        to="/orderOnline"
                        className={`px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover ${location.pathname === '/orderOnline' ? 'active' : ''}`}
                    >
                        Order Online
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className={`px-2 px-md-3 text-decoration-none text-dark fw-bold link-hover ${location.pathname === '/login' ? 'active' : ''}`}
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
