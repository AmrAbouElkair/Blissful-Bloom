import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../../UI";
import { getProducts } from "../../../../store/slices/products/productsFetching";

const FeaturedProducts = ({ type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);
  const filteredProducts = products.filter((pro) => pro.product_type === type);

  return (
    <Fragment>
      <div className="featured-top container-fluid">
        <div className="row fratured-top-row">
          <div className="item col">
            <h1>{type} Products</h1>
          </div>
          <div className="item col">
            <p>
              Fugiat consectetur est ea mollit minim minim irure anim amet nisi
              sint laborum aliqua. Non fugiat nulla pariatur velit reprehenderit
              laborum quis sint exercitation qui. Aliqua pariatur est aliquip
              elit consectetur do amet eu. Laborum mollit sint commodo consequat
              occaecat ut tempor fugiat excepteur reprehenderit dolore.
            </p>
          </div>
        </div>
      </div>
      <div className="featured-bottom container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredProducts?.map((pro, nl) => (
            <Card product={pro} key={pro.id + nl} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedProducts;
