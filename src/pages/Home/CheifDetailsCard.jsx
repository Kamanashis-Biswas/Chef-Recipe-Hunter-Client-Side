/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CheifDetailsCard = ({ cheif }) => {
  return (
    <div>
      <div className="p-5 border rounded-2xl bg-slate-100">
        <img className="rounded-3xl mb-5 w-[300px]" src={cheif.picture} alt="Cheif Photo" />
        <h2 className="font-bold text-4xl">{cheif.name}</h2>
        <p className="text-lg">Year of Exprence:{cheif.years_of_experience}</p>
        <p className="text-lg">Number of Receipe: {cheif.number_of_recipes}</p>
        <p className="text-lg mb-5">Like: {cheif.likes}</p>
        <Link to="/receipedetails">
          <Button>View Recipe</Button>
        </Link>
      </div>
    </div>
  );
};

export default CheifDetailsCard;
