import Nav from '../Nav/Nav';

function Header() {
    return (
        <header>
            <div className="container-fluid py-3">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start">
                        <img
                            alt="Little Lemon logo"
                            src="images/logo.png"
                            title="Little Lemon"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-end">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
