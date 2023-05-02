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
      <div>
        <h2 className="text-2xl md:text-4xl font-bold my-9 text-center">
          Cheif Details
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
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
