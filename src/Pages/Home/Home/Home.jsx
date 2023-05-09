import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Coffees from "../Coffees/Coffees";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <Banner />
      <Coffees coffees={coffees} />
    </div>
  );
};

export default Home;
