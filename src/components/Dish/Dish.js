import './Dish.css';

function Dish({ image, name, description, price }) {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 dish-hover">
                <img
                    src={image}
                    alt={name}
                    title={name}
                    className="card-img-top img-fluid"
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">{name}</h5>
                        <span className="fw-bold text-primary">{price}</span>
                    </div>
                    <p className="card-text mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Dish;
