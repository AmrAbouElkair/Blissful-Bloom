import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Register with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fa-lg fa-brands fa-facebook"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fa-lg fa-brands fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fa-lg fa-brands fa-linkedin"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* <!-- First & Last Name input --> */}
              <div className="form-outline mb-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control form-control-lg"
                    placeholder="Enter your First Name"
                  />
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control form-control-lg"
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>
              {/* <!-- phone number input --> */}
              <div className="form-outline mb-4">
                <input
                  type="number"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example5"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link to="login" className="link-danger mx-1">
                    LogIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* <!-- Copyright --> */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>
        {/* <!-- Copyright --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fa-lg fa-brands fa-facebook"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fa-lg fa-brands fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fa-lg fa-brands fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fa-lg fa-brands fa-linkedin"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
      </div>
    </section>
  );
};

export default Register;
