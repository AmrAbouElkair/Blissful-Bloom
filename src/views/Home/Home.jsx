import { Fragment } from "react";

import "./_home.scss";
import {
  Categories,
  Contact,
  FeaturedProducts,
  Slider,
} from "../../components/pages/Home";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </Fragment>
  );
};

export default Home;
