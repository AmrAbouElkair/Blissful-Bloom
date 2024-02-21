import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MDBCol } from "mdb-react-ui-kit";
import toast, { Toaster } from "react-hot-toast";

import "./_product.scss";

import { getProduct } from "../../store/slices/products/productsFetching";
import {
  addToCart,
  decrememnt,
  increment,
} from "../../store/slices/cart/cartSllice";

const Product = () => {
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(0);
  const productID = useParams().id;

  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(getProduct(productID));
  }, [dispatch, productID]);

  const product = useSelector((state) => state.products.product);
  const images = [product.image1, product.image2];

  const addToCartOnClickHandler = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        desc: product.desc,
        price: product.price,
        img: product.image1,
        quantity: 1,
      })
    );
    toast.success("Product Added!", {
      style: {
        border: "1px solid #2879fe",
        fontSize: "20px",
        padding: "20px",
        color: "#2879fe",
      },
      iconTheme: {
        primary: "#2879fe",
        secondary: "#FFFAEE",
      },
      position: "bottom-right",
    });
  };

  const existingProduct = products.find((pro) => pro.id === product.id);

  return (
    <>
      <div className="container-fluid product ">
        {
          <>
            <div className="left">
              <div className="images">
                <img
                  src={product.image1}
                  alt="pro1"
                  onClick={() => setSelectedImg(0)}
                />
                <img
                  src={product.image2}
                  alt="pro2"
                  onClick={() => setSelectedImg(1)}
                />
              </div>
              <div className="mainImg">
                <img src={images[selectedImg]} alt="selcImg" />
              </div>
            </div>
            <div className="right">
              <div className="right-top">
                <h2>{product.title}</h2>
                <h4>${Number(product.price).toFixed(2)}</h4>
                <p>{product.desc}</p>

                <div className="btn-group">
                  <button
                    disabled={existingProduct ? true : false}
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={addToCartOnClickHandler}
                  >
                    <span>
                      <i className="fa-lg fa-solid fa-cart-plus"></i>
                    </span>
                    add to cart
                  </button>
                </div>
                <MDBCol
                  md="1"
                  lg="1"
                  xl="1"
                  className="d-flex align-items-center justify-content-center  m-3"
                >
                  <div className="quantity d-flex justify-content-center align-items-center gap-1">
                    <button
                      className="btn"
                      onClick={() => dispatch(decrememnt(existingProduct))}
                    >
                      <i
                        className="fa-lg fa-solid fa-minus fa-sm"
                        style={{ color: "#2879fe" }}
                      ></i>
                    </button>
                    <span>
                      {existingProduct ? existingProduct.quantity : 0}
                    </span>
                    <button
                      className="btn"
                      onClick={() => dispatch(increment(existingProduct))}
                    >
                      <i
                        className="fa-lg fa-solid fa-plus fa-sm"
                        style={{ color: "#2879fe" }}
                      ></i>
                    </button>
                  </div>
                </MDBCol>

                <div className="link">
                  <div className="item">
                    <i className="fa-lg fa-regular fa-heart"></i>
                    add to wishlist
                  </div>
                  <div className="item">
                    <i className="fa-lg fa-solid fa-scale-balanced"></i>
                    add to compare
                  </div>
                </div>
              </div>
              <div className="right-bottom">
                <div className="info">
                  <span>vendor: polo</span>
                  <span>Product Type: T-Shirt</span>
                  <span>Tag: T-Shirt, Men, Top</span>
                </div>
                <hr />
                <div className="details">
                  <span>DESCRIPTION</span>
                  <hr />
                  <span>ADDITIONAL INFORMATION</span>
                  <hr />
                  <span>FAQ</span>
                </div>
              </div>
            </div>
          </>
        }
        <Toaster />
      </div>
    </>
  );
};

export default Product;
