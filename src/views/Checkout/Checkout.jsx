import { useSelector } from "react-redux";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span
              className="bg-primary bg-opacity-75 fs-4 text-white p-2"
              style={{ borderRadius: "5px", marginLeft: "5px" }}
            >
              {products.length}
            </span>
          </h4>
          <ul className="list-group mb-3 sticky-top">
            {products?.map((pro) => (
              <li
                key={pro.id}
                className="list-group-item d-flex justify-content-between lh-condensed"
              >
                <div>
                  <h6 className="my-0 text-capitalize">{pro.title}</h6>
                  <small className="text-muted">
                    {pro.desc.substring(0, 50)}
                  </small>
                </div>
                <span className="text-muted">
                  {(pro.price * pro.quantity).toFixed(2)}
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>
                $
                {products
                  .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                  .toFixed(2)}
              </strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation">
            <div className="row"></div>
            <div className="mb-3">
              <label htmlFor="email">Enter your email</label>
              <input type="email" className="form-control" id="email" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required={true}
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="custom-select d-block w-100" id="country">
                  <option value="">Choose...</option>
                  <option>United States</option>
                  <option>United Arab Emirats</option>
                  <option>German</option>
                  <option>Belgium</option>
                  <option>France</option>
                  <option>Egypt</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                />
                <div className="invalid-feedback"> Zip code required. </div>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="mb-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                />
                <div className="invalid-feedback"> Security code required </div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2023-2024 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Checkout;
