import Card from "../Card/Card";
import { useEffect, useState } from "react";
// import { getProducts } from "../../../store/slices/products/productsFetching";
// import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../../config/firebase";

const List = ({ catId, maxPrice, sort, subCats }) => {
  // const dispatch = useDispatch();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let q = collection(db, "products");
    if (subCats.length > 0) {
      q = query(q, where("sub_category", "in", subCats));
    }
    if (sort === "asc") {
      q = query(q, orderBy("price", "asc"));
    } else if (sort === "desc") {
      q = query(q, orderBy("price", "desc"));
    }
    if (maxPrice) {
      q = query(q, where("price", "<=", Number(maxPrice)));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFilteredProducts(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, [subCats, sort, maxPrice]);

  // useEffect(() => {
  //   dispatch(getProducts(catId));
  // }, [dispatch, catId]);

  return (
    <div className="container">
      <div>
        <div className="bottom row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-2">
          {filteredProducts?.map((pro, nl) => (
            <Card product={pro} key={pro.id + nl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
