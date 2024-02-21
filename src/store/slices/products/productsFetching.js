import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "../../../config/firebase";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// * Adding new sub-category
export const addNewSubCategory = createAsyncThunk(
  "sub-category/addNewSubCategory",
  async (title) => {
    try {
      const colRef = doc(db, "sub-category", uuidv4);
      await setDoc(colRef, { title });
      console.log("sub-category added successfully.");
    } catch (err) {
      console.error("Error adding sub-category:", err);
    }
  }
);

// * Adding new category
export const addNewCategory = createAsyncThunk(
  "category/addNewCategory",
  async (category) => {
    const { title, image } = category;
    const colRef = doc(db, "category", title);
    const imageRef = image ? ref(storage, `images/${image?.name}`) : null;
    if (imageRef) {
      try {
        const snapshot = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        await setDoc(colRef, { title, url });
        console.log("Category added successfully.");
      } catch (err) {
        console.error("Error adding category:", err);
      }
    } else {
      console.error("No image file selected.");
    }
  }
);

// * Adding new product
export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (product) => {
    const { image1, image2 } = product;
    const itemId = uuidv4();
    const docRefCol = doc(db, "products", itemId);
    const imageRef1 = image1 ? ref(storage, `images/${image1.name}`) : null;
    const imageRef2 = image2 ? ref(storage, `images/${image2.name}`) : null;
    if (imageRef1 && imageRef2) {
      try {
        const snapshot1 = await uploadBytes(imageRef1, image1);
        const url1 = await getDownloadURL(snapshot1.ref);
        const snapshot2 = await uploadBytes(imageRef2, image2);
        const url2 = await getDownloadURL(snapshot2.ref);
        await setDoc(docRefCol, {
          ...product,
          image1: url1,
          image2: url2,
          createdAt: moment().format("MMMM Do YYYY, h:mm:ss"),
        });
        console.log("Product added successfully.");
      } catch (error) {
        console.error("Error adding product:", error);
        throw error;
      }
    } else {
      console.error("No image file selected.");
    }
  }
);

// * Fetching Products
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (categoryID) => {
    const colRef = collection(db, "products");
    // * Filtering data if categoryID exist
    if (categoryID) {
      try {
        const q = query(colRef, where("category", "==", categoryID));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return products;
      } catch (err) {
        console.error("Error getting product:", err);
      }
    } else {
      try {
        const querySnapshot = await getDocs(colRef);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return products;
      } catch (err) {
        console.error("Error getting product:", err);
      }
    }
  }
);

// * Fetching Categories
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const colRef = collection(db, "category");
    try {
      const querySnapshot = await getDocs(colRef);
      const categories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return categories;
    } catch (err) {
      console.error("Error getting product:", err);
    }
  }
);

// * Fetching Sub-Categories
export const getSubCategories = createAsyncThunk(
  "categories/getSubCategories",
  async () => {
    const colRef = collection(db, "sub-category");
    try {
      const querySnapshot = await getDocs(colRef);
      const subCategories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return subCategories;
    } catch (err) {
      console.error("Error getting product:", err);
    }
  }
);

// * Fetching One Product
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (proID) => {
    const colRef = doc(db, "products", proID);
    try {
      const product = await getDoc(colRef);
      return { ...product.data(), id: product.id };
    } catch (err) {
      console.error("Error getting product:", err);
    }
  }
);
