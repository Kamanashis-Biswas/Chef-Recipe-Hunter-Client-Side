/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CheifDetailsCard = ({ cheif }) => {
  return (
    <div>
        <img src={cheif.picture} alt="Cheif Photo" />
      <h2>{cheif.name}</h2>
      <p>Year of Exprence:{cheif.years_of_experience}</p>
      <p>Number of Receipe: {cheif.number_of_recipes}</p>
      <p>Like: {cheif.likes}</p>
     <Link to='/receipedetails'><Button>Details</Button></Link>
    </div>
  );
};

export default CheifDetailsCard;
