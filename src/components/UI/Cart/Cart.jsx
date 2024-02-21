import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

import "./_cart.scss";

import {
  removeFromCart,
  resetCart,
} from "../../../store/slices/cart/cartSllice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  const onClickHandler = (pro) => {
    dispatch(removeFromCart(pro));
    toast.success("Product Deleted!", {
      style: {
        border: "1px solid #ff4b4b",
        fontSize: "20px",
        padding: "20px",
        color: "#ff4b4b",
      },
      iconTheme: {
        primary: "#ff4b4b",
        secondary: "#FFFAEE",
      },
      position: "bottom-right",
    });
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-end cart-offcanvas"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Products in your cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {products?.map((pro) => (
            <div className="item" key={pro.id}>
              <div>
                <img src={pro.img} alt={pro.alt} />
              </div>
              <div className="details">
                <h6>{pro.title}</h6>
                <p className="desc">{pro.desc.substring(0, 100)}</p>
                <p className="price">
                  {pro.quantity} x ${pro.price.toFixed(2)}
                </p>
              </div>
              <button
                type="button"
                className="btn border-0 text-danger"
                onClick={() => onClickHandler(pro)}
              >
                <MDBIcon fas icon="times" style={{ fontSize: "20px" }} />
              </button>
            </div>
          ))}
          {/* <div className="total">
          <span>totalPrice</span>
          <span>
            $
            {products
              .reduce((acc, item) => (acc += item.price * item.quantity), 0)
              .toFixed(2)}
          </span>
        </div> */}
          <div className="cart-btn">
            <Link className="btn btn-primary text-capitalize w-75" to="cart">
              go to cart
            </Link>
            <button
              type="button"
              className="reset btn btn-danger w-25 mt-2"
              onClick={() => dispatch(resetCart())}
            >
              Reset Cart
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Cart;
