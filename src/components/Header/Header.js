import Nav from '../Nav/Nav';

function Header() {
    return (
    <header className='d-flex justify-content-center align-items-center px-3 py-3'>
        <img alt="Little Lemon logo" src="images/logo.png" title="Little Lemon" className='img-fluid mx-5' />
        <Nav />
    </header>
    );
}

export default Header;