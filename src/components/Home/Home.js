import ActionButton from '../ActionButton/ActionButton';
import Dish from '../Dish/Dish';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row background-green">
                <div className="col-12 col-md-8 py-3">
                    <h2 className="color-yellow">Little Lemon</h2>
                    <h4 className="text-light">Your favorite spot for fresh and delicious food.</h4>
                    <p className="text-light">
                        We are a family-owned Mediterranean restaurant dedicated to delivering an
                        authentic and unique culinary experience. Our menu is inspired by
                        traditional recipes passed down through generations, reimagined with
                        a modern twist to surprise and delight our guests. Every dish is crafted
                        using fresh, high-quality ingredients, capturing the vibrant flavors and
                        aromas that define Mediterranean cuisine. Our goal is to make every visit
                        memorable, combining warm, attentive service and a welcoming atmosphere
                        with a culinary journey that pays homage to our heritage.
                    </p>
                    <ActionButton>
                        Reserve a Table
                    </ActionButton>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center py-3">
                    <img
                        className="img-fluid rounded-3"
                        alt="example dish 1"
                        title="example dish 1"
                        src="images/example-dish-1.jpg"
                    />
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5">
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <h2>This week’s specials!</h2>
                    </div>
                    <div className="col-12 col-md-6">
                        <ActionButton>
                            Online Menu
                        </ActionButton>
                    </div>
                </div>
                <div className="row flex-wrap">
                    <Dish
                        image="images/greek-salad.jpg"
                        name="Greek Salad"
                        description="A fresh and crisp salad with feta cheese, olives, and cucumbers."
                        price="$12.99"
                    />
                    <Dish
                        image="images/chicken.jpg"
                        name="Chicken Souvlaki"
                        description="Tender marinated chicken skewers served with tzatziki sauce."
                        price="$16.99"
                    />
                    <Dish
                        image="images/baklava.jpg"
                        name="Baklava"
                        description="A rich, sweet pastry made with layers of filo and nuts."
                        price="$8.50"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
