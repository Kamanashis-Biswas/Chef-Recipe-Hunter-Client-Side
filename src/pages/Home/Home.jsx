/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar";
import CheifDetailsCard from "./CheifDetailsCard";
import { Card } from "flowbite-react";

const Home = () => {
  const allCheifDetails = useLoaderData();
  return (
    <div className="container mx-auto">
      {/* Bannar section */}
      <Bannar></Bannar>
      {/* Cheif Details  */}
      <div className="p-3">
        <h2 className="text-2xl md:text-4xl font-bold mt-10 md:mt-20 mb-5 md:mb-10 text-center">
          Cheif Details
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 mb-40 gap-7">
          {allCheifDetails &&
            allCheifDetails.map((cheif) => (
              <CheifDetailsCard key={cheif.id} cheif={cheif}></CheifDetailsCard>
            ))}
        </div>
      </div>
      {/* Extra section */}
      <div className=" text-center">
        <div>
          <h2 className="mb-3 text-xl text-yellow-400">Choose a Category</h2>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2md:mt-20 mb-5 md:mb-10">
            Recipe Categories
          </h2>
        </div>
        <div className="md:flex gap-10 p-5">
          <div>
            <img
              className="rounded-full"
              src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/appetizer-bruschetta-with-tuna-and-tomatoes-LKA5ZYU-omrs5yczemz943vxo1dqw9tztvscarh3mzggf5azkw.jpg"
              alt=""
            />
            <p className="mt-4">Appetizers</p>
          </div>
          <div>
            <img
              className="rounded-full"
              src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/beef-steak-tomahawk-S3JHQLN-omrts6h2r6ooajb7o7fsckvwj4sv3smiz698m6z25c.jpg"
              alt=""
            />
            <p className="mt-4">beef</p>
          </div>
          <div>
            <img
              className="rounded-full"
              src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/baked-chicken-breast-9C4F43W-omrrd2rhfvg4fdu0ak0dak66tq4dtitz01xfn44eqo.jpg"
              alt=""
            />
            <p className="mt-4">Chicken</p>
          </div>
          <div>
            <img
              className="rounded-full"
              src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-omrff2jgxcsv5cfw86lk4kjvmzkfiaqk7pxv13p38g.jpg"
              alt=""
            />
            <p className="mt-4">Vegetarian</p>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-20 mb-5 md:mb-10 text-center">
          Latest Recipe
        </h2>
        <div className="md:flex gap-10 p-5">
          <Card imgSrc="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/pecan-pie-tart-in-baking-dish-traditional-festive-9WMXQ3Z-1024x573.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tart Pecan Pie
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              A handful of simple ingredients typify the fresh, vibrant flavors
              of Greek cooking.
            </p>
          </Card>
          <Card imgSrc="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/baked-chicken-breast-9C4F43W-1024x682.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Greek Gyro
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              A handful of simple ingredients typify the fresh, vibrant flavors
              of Greek cooking.
            </p>
          </Card>
          <Card imgSrc="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/vegan-tofu-baked-cheese-pancakes-with-mango-2GBH46C-1024x683.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tomahawk Steak
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              A handful of simple ingredients typify the fresh, vibrant flavors
              of Greek cooking.
            </p>
          </Card>
          <Card imgSrc="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-1024x684.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Baked Chicken Breast
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              A handful of simple ingredients typify the fresh, vibrant flavors
              of Greek cooking.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
