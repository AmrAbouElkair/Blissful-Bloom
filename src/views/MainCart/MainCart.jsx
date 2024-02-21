import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import "./_mainCart.scss";
import {
  decrememnt,
  increment,
  removeFromCart,
  resetCart,
} from "../../store/slices/cart/cartSllice";

const MainCart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-center align-items-center mb-5 text-uppercase">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                      </div>
                      <hr className="my-4" />
                      {products?.map((pro) => (
                        <MDBRow
                          key={pro.id}
                          className="mb-4 d-flex justify-content-between align-items-center"
                        >
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={pro.img}
                              fluid
                              className="rounded-3 main-img"
                              style={{
                                height: "100px",
                                width: "100px",
                                objectFit: "cover",
                              }}
                              alt={pro.alt}
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            lg="2"
                            xl="2"
                            className="my-3 text-center"
                          >
                            <MDBTypography
                              tag="h6"
                              className="text-muted text-capitalize"
                            >
                              {pro.title}
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              {pro.desc.substring(0, 20)}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center justify-content-center"
                          >
                            <div className="quantity d-flex justify-content-center align-items-center gap-1">
                              <button
                                className="btn"
                                onClick={() => dispatch(decrememnt(pro))}
                              >
                                <i
                                  className="fa-solid fa-minus fa-sm"
                                  style={{ color: "#2879fe" }}
                                ></i>
                              </button>
                              <span>{pro.quantity}</span>
                              <button
                                className="btn"
                                onClick={() => dispatch(increment(pro))}
                              >
                                <i
                                  className="fa-solid fa-plus fa-sm"
                                  style={{ color: "#2879fe" }}
                                ></i>
                              </button>
                            </div>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="2"
                            xl="2"
                            className="text-center my-2"
                          >
                            <MDBTypography tag="h6" className="mb-0">
                              ${pro.price.toFixed(2)}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="2"
                            xl="2"
                            className="text-center my-2"
                          >
                            <MDBTypography tag="h6" className="mb-0">
                              ${(pro.price * pro.quantity).toFixed(2)}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="1"
                            lg="1"
                            xl="1"
                            className="text-center remove"
                          >
                            <button
                              className="btn border-0 text-danger"
                              onClick={() => dispatch(removeFromCart(pro))}
                            >
                              <MDBIcon fas icon="times" />
                            </button>
                          </MDBCol>
                          <hr className="my-4" />
                        </MDBRow>
                      ))}
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <Link to="/" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" />
                            Back to shop
                          </Link>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>
                      <hr className="my-4" />
                      <MDBTypography tag="h5" className=" mb-3">
                        Shipping Methods
                      </MDBTypography>
                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Standard-Delivery</option>
                          <option value="2">Master-Card</option>
                          <option value="3">Paypal</option>
                        </select>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-start mb-4">
                        <MDBTypography tag="h5" className="text-capitalize">
                          items:
                          <span
                            className="bg-danger fs-6 text-white p-1"
                            style={{ borderRadius: "5px", marginLeft: "5px" }}
                          >
                            {products.length}
                          </span>
                        </MDBTypography>
                      </div>
                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5">Total price</MDBTypography>
                        <MDBTypography tag="h5">
                          $
                          {products
                            .reduce(
                              (acc, item) =>
                                (acc += item.price * item.quantity),
                              0
                            )
                            .toFixed(2)}
                        </MDBTypography>
                      </div>
                      <Link to="checkout" className="btn btn-dark btn-lg">
                        Procced to checkout
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger me-1 my-2"
                        onClick={() => dispatch(resetCart())}
                      >
                        Reset the cart
                      </button>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default MainCart;
