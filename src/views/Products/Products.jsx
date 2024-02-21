import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./_products.scss";

import { List } from "../../components/UI";

import { getSubCategories } from "../../store/slices/products/productsFetching";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const catId = useParams().id;
  const images = useSelector((state) => state.allImages.productsImg);

  const subCategoryChangeHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats((prevSelectedSubCats) =>
      isChecked
        ? [...prevSelectedSubCats, value]
        : prevSelectedSubCats.filter((item) => item !== value)
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubCategories());
  }, [dispatch]);

  const subCategories = useSelector((state) => state.products.subCategories);

  return (
    <Fragment>
      <div className="product-container container-fluid">
        <div className="top row mb-4">
          <img src={images.landingProImg} alt="landing-products-img" />
        </div>
        <div className="center row mb-2">
          <nav className="navbar navbar-expand-lg bg-primary bg-opacity-10">
            <div className="container-fluid">
              <h2 className="navbar-brand">Categories</h2>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav categ-navbar">
                  <li className="nav-item dropdown ms-3">
                    <div className="btn-group">
                      <button
                        className="btn btn-outline dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Product Categories
                      </button>
                      <ul className="dropdown-menu">
                        {subCategories?.map((cat) => (
                          <li key={cat?.id}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={cat?.id}
                                value={cat?.id}
                                onChange={subCategoryChangeHandler}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={cat?.id}
                              >
                                {cat?.title}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="btn-group">
                      <button
                        className="btn btn-outline dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="price"
                              id="all-products"
                              value="all-products"
                              onChange={() => setSort("")}
                              checked={sort === ""}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="all-products"
                            >
                              All Products
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="price"
                              id="asc"
                              value="asc"
                              onChange={() => setSort("asc")}
                              checked={sort === "asc"}
                            />
                            <label className="form-check-label" htmlFor="asc">
                              Lowest price
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="price"
                              id="desc"
                              value="desc"
                              onChange={() => setSort("desc")}
                              checked={sort === "desc"}
                            />
                            <label className="form-check-label" htmlFor="desc">
                              Highest price
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <label
                      htmlFor="customRange1"
                      className="form-label d-flex justify-content-center align-items-center"
                    >
                      Filter by price
                    </label>
                    <div className="filter-input d-flex justify-content-center align-items-center">
                      <input
                        type="range"
                        id="customRange1"
                        min={1}
                        max={250}
                        step={1}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        style={{ width: "150px" }}
                      />
                      <span>{maxPrice}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </Fragment>
  );
};

export default Products;
