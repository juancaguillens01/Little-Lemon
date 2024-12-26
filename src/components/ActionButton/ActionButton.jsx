import { Link } from 'react-router-dom';
import './ActionButton.css';

function ActionButton({ children, link }) {
    return (
        <Link to={link} className="text-decoration-none">
            <button aria-label="On Click" className="background-yellow btn fw-bold button-hover">
                {children}
            </button>
        </Link>
    );
}

export default ActionButton;