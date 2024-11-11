function Main() {
    return (
        <main className="background-green py-3 w-100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h2 className="color-yellow">Little Lemon</h2>
                        <h4 className="text-light">Your favorite spot for fresh and delicious food.</h4>
                        <p className="text-light">
                            We are a family owned Mediterranean restaurant, focused on traditional recipes
                            served with a modern twist.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            className="img-fluid rounded-5"
                            alt="example dish 1"
                            title="example dish 1"
                            src="images/example-dish-1.jpg"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
