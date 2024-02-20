import { createSlice } from "@reduxjs/toolkit";

// Partials
// // NavBar
import navImg from "../../../assets/images/Home/en.png";
// // Footer
import footImg from "../../../assets/images/Home/payment.png";

// Home
// // slider
import mainImg from "../../../assets/images/Home/main/pexels-thaís-silva-3385234.jpg";
import homeImg1 from "../../../assets/images/Home/main/pexels-maryia-plashchynskaya-3615455.jpg";
import homeImg2 from "../../../assets/images/Home/main/pexels-ron-lach-9256867.jpg";
// // FeaturedProducts
// // // card 1
import card1Img1 from "../../../assets/images/Home/features/img1.jpg";
import card1Img2 from "../../../assets/images/Home/features/altImage1.jpg";
// // // card 1
import card2Img1 from "../../../assets/images/Home/features/img2.jpg";
// // // card 3
import card3Img1 from "../../../assets/images/Home/features/img3.jpg";
// // // card 4
import card4Img from "../../../assets/images/Home/features/img4.jpg";
// // Categories
import saleImg from "../../../assets/images/Home/categories/sale.jpg";
import womenImg from "../../../assets/images/Home/categories/women.jpg";
import newSesonImg from "../../../assets/images/Home/categories/newseason.jpg";
import menImg from "../../../assets/images/Home/categories/men.jpg";
import accessoriesImg from "../../../assets/images/Home/categories/accessories.jpg";
import shoesImg from "../../../assets/images/Home/categories/shoes.jpg";

// Products
import productsMainImg from "../../../assets/images/Products/pexels-bas-masseus-1074535.jpg";

const initialState = {
  navBarImg: {
    navImg,
  },
  footer: {
    footImg,
  },

  homePageImages: {
    sliderImgs: {
      mainImg,
      allImages: [
        { id: 1, img: homeImg1 },
        { id: 2, img: homeImg2 },
      ],
    },
    featureImgs: [
      {
        id: 1,
        img: card1Img1,
        img2: card1Img2,
        title: "Hoddie",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 2,
        img: card2Img1,
        img2: card2Img1,
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 3,
        img: card3Img1,
        img2: card3Img1,
        title: "Jacket",
        isNew: false,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 4,
        img: card4Img,
        img2: card4Img,
        title: "Shirt",
        isNew: false,
        oldPrice: 19,
        price: 12,
      },
    ],

    categoriesImg: {
      saleImg,
      womenImg,
      newSesonImg,
      menImg,
      accessoriesImg,
      shoesImg,
    },
  },

  productsImg: {
    landingProImg: productsMainImg,
  },
};

const imagesSlice = createSlice({
  name: "allImages",
  initialState,
  reducers: {},
});

export default imagesSlice.reducer;
