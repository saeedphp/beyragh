import {Fragment} from "react";
import Slider from "../components/home-page/slider";
import Service from "../components/home-page/service";
import Insurance from "../components/home-page/insurance";
import Mourning from "../components/home-page/mourning";
import Shop from "../components/home-page/shop";
import Charity from "../components/home-page/charity";
import Blog from "../components/home-page/blog";

const HomePage = ({testRedux}) => {
  return (
      <Fragment>
          <Slider />
          <Service />
          <Insurance />
          <Mourning />
          <Shop />
          <Charity />
          <Blog />
      </Fragment>
  )
};


export default (HomePage);