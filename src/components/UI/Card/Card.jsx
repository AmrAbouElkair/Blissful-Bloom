import { Link } from "react-router-dom";

import "./_card.scss";

const Card = ({ product }) => {
  return (
    <div className="col">
      <div
        className={`card featured-card w-100 animate__animated animate__fadeIn`}
      >
        <Link to={`/product/${product?.id}`}>
          <div className="image">
            {product?.product_condition && <span>New Season</span>}
            <img
              src={product?.image1}
              className="card-img-top main-img"
              alt="card-img"
            />
            <img
              src={product?.image2}
              className="card-img-top second-img"
              alt="card-img"
            />
          </div>
        </Link>
        <div className="card-body">
          <h2>{product?.title}</h2>
          <div className="prices">
            <h3 className="sale">${product?.price + 20}</h3>
            <h3>${product?.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
