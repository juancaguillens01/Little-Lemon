import './Footer.css';

function Footer() {
    return (
        <footer className="background-orange p-3">
            <div className="row justify-content-start">
                <div className="col-12 d-flex">
                    <img
                        alt="Little Lemon logo"
                        src="images/logoFooter.png"
                        title="Little Lemon"
                        className="img-fluid footer-logo me-3"
                    />
                    <div className="d-flex align-items-end">
                        <p className="fw-bold mb-0">&copy; 2024 Little Lemon. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
