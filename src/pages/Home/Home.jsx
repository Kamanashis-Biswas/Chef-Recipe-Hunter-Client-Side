/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar";
import CheifDetailsCard from "./CheifDetailsCard";

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
    </div>
  );
};

export default Home;
