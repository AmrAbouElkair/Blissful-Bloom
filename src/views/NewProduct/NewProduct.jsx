import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { object, string, boolean } from "yup";

import "./_newProduct.scss";
import {
  addNewProduct,
  getCategories,
  getSubCategories,
} from "../../store/slices/products/productsFetching";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [isNew, setIsNew] = useState("");
  const [category, setCateg] = useState("");
  const [sub_category, setSubCateg] = useState("");
  const [product_type, setFeatureType] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  // Getting collections
  const categories = useSelector((state) => state.products.categories);
  const subCategories = useSelector((state) => state.products.subCategories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());
  }, [dispatch]);

  const validateForm = async () => {
    if (image1 && image2 === null) return;
    const product_condition = isNew === "true" ? true : false;
    let productSchema = object().shape({
      title: string().required(),
      price: string().required(),
      desc: string().required(),
      category: string(),
      sub_category: string().required(),
      product_type: string(),
      product_condition: boolean().required(),
    });
    const product = {
      title,
      desc,
      product_condition,
      price: parseInt(price, 10),
      product_type,
      category,
      sub_category,
      image1,
      image2,
    };
    const isValid = await productSchema.isValid(product);
    if (isValid) {
      toast.success("New Product Added!", {
        position: "bottom-right",
        style: {
          border: "1px solid teal",
          padding: "16px",
          color: "teal",
        },
        iconTheme: {
          primary: "teal",
          secondary: "#FFFAEE",
        },
      });
      dispatch(addNewProduct(product));
    } else {
      toast.error("Unable to add product!", {
        position: "bottom-right",
        style: {
          border: "1px solid #ff4b4b",
          padding: "16px",
          color: "#ff4b4b",
        },
        iconTheme: {
          primary: "#ff4b4b",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    setTitle();
    setDesc();
    setPrice();
    setIsNew();
    setCateg();
    setSubCateg();
    setFeatureType();
  };

  return (
    <>
      <div className="product__form">
        <div className="product__modal">
          <div className="product__modal__container">
            <div className="product__modal__featured">
              <Link
                to="/"
                type="button"
                className="button--transparent button--close"
              >
                <i className="fa-solid fa-arrow-left-long fa-lg"></i>
                <span className="visuallyhidden">Return to Product Page</span>
              </Link>
              <div className="product__modal__circle"></div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fir-learnning-d99c3.appspot.com/o/images%2Fpg1.jpg?alt=media&token=650fe679-2815-46bc-8934-56a3bfa41919"
                className="product__modal__product"
              />
            </div>
            <div className="product__modal__content">
              <h2>Your new product details</h2>

              <form onSubmit={handleSubmit}>
                <ul className="form-list">
                  <div className="form-group">
                    <li className="form-list__row sided">
                      <label htmlFor="title">title</label>
                      <input
                        required
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter The Product Title"
                      />
                    </li>
                    <li className="form-list__row sided">
                      <label htmlFor="price">price</label>
                      <input
                        required
                        autoComplete="off"
                        type="text"
                        name="price"
                        value={price}
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter The Product Price"
                      />
                    </li>
                  </div>
                  <div className="form-group">
                    <li className="form-list__row sided">
                      <div>
                        <label htmlFor="condition">Condition</label>
                        <select
                          required
                          name="condition"
                          id="condition"
                          onChange={(e) => setIsNew(e.target.value)}
                          value={isNew}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="Select the isNew">
                            Select Condition (new or not)
                          </option>
                          <option value="true">true</option>
                          <option value="false">false</option>
                        </select>
                      </div>
                    </li>
                    <li className="form-list__row sided">
                      <div>
                        <label htmlFor="type">Featured</label>
                        <select
                          name="type"
                          id="type"
                          value={product_type}
                          onChange={(e) => setFeatureType(e.target.value)}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="select the feature">
                            Select Feature Type
                          </option>
                          <option value="featured">Featured</option>
                          <option value="trending">Trending</option>
                        </select>
                      </div>
                    </li>
                  </div>
                  <div className="form-group">
                    <li className="form-list__row sided">
                      <div>
                        <label htmlFor="sub-category">Sub Category</label>
                        <select
                          name="sub-category"
                          id="sub-category"
                          value={sub_category}
                          onChange={(e) => setSubCateg(e.target.value)}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="Select the sub-category">
                            Select Sub Category
                          </option>
                          {subCategories?.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li>
                    <li className="form-list__row sided">
                      <div>
                        <label htmlFor="category">Category</label>
                        <select
                          required
                          name="category"
                          id="category"
                          value={category}
                          onChange={(e) => setCateg(e.target.value)}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="Select the category">
                            Select Category
                          </option>
                          {categories.map((cat) => (
                            <option key={cat.id} value={cat.title}>
                              {cat.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li>
                  </div>

                  <li className="form-list__row">
                    <div>
                      <label htmlFor="desc">desc</label>
                      <textarea
                        required
                        name="desc"
                        id="desc"
                        rows={3}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                        placeholder="Enter Product Description"
                      ></textarea>
                    </div>
                  </li>

                  <div className="form-group form-group-images">
                    <li className="form-list__row sided">
                      <div>
                        <label htmlFor="upload Image1">upload Img 1</label>
                        <input
                          required
                          type="file"
                          name="upload Image1"
                          id="upload Image1"
                          className="form-control"
                          onChange={(e) => setImage1(e.target.files[0])}
                        />
                      </div>
                    </li>
                    <li className="form-list__row sided">
                      <div>
                        <label htmlFor="upload Image2">upload Img 2</label>
                        <input
                          required
                          type="file"
                          name="upload Image2"
                          id="upload Image2"
                          onChange={(e) => setImage2(e.target.files[0])}
                          className="form-control"
                        />
                      </div>
                    </li>
                  </div>
                  <li className="mt-5 text-center">
                    <button type="submit" className="button fs-5">
                      add new product
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      </div>
    </>
  );
};

export default ProductForm;
