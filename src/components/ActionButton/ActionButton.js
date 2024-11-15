import './ActionButton.css';

function ActionButton({ children }) {
    return (
        <button className="background-yellow btn fw-bold button-hover">
            {children}
        </button>
    );
}

export default ActionButton;