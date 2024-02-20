import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Styling
import "./_footer.scss";

const colClasses = "col-md-2 d-flex flex-column justify-content-around";

const Footer = () => {
  //   const footerImg = useSelector((state) => state.allImages.footer.footImg);
  return (
    <div className="container-fluid footer">
      <div className="row top">
        <div className={colClasses}>
          <h1>Catagories</h1>
          <Link to="/products/1">Women</Link>
          <Link to="/products/2">Men</Link>
          <Link to="">Shoes</Link>
          <Link to="">Accessories</Link>
          <Link to="">New Arrivals</Link>
        </div>
        <div className={colClasses}>
          <h1>Links</h1>
          <Link to="">FAQ</Link>
          <Link to="">Pages</Link>
          <Link to="">Stores</Link>
          <Link to="">Compare</Link>
          <Link to="">Cokkies</Link>
        </div>
        <div className="col-md-2">
          <h1>About</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here',
          </p>
        </div>
        <div className="col-md-2">
          <h1>Contact</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here',
          </p>
        </div>
      </div>

      <div className="row bottom">
        <div className="col col-lg-6">
          <h5>Alphastore</h5>
          <p>&copy;Copyright 2023 All Right reserved</p>
        </div>
        <div className="col col-lg-6">
          {/* <img src={footerImg} alt="footerImg" className="h-50" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
