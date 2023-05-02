/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex mt-10">
        <div className="md:w-1/2">
          <div>
            <h1 className="text-8xl font-bold mb-4">
              Welcome to Chef's Corner!
            </h1>
            <p className="text-4xl mb-6">
              Discover the art of culinary excellence
            </p>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-red-600 text-white py-2 px-4 rounded-full inline-block uppercase tracking-wide"
            >
              Explore Recipes
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/t4pRSCX/recipe14-1024x683.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
