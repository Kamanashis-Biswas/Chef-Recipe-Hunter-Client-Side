/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReceipeDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/chef_details/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setChef(data);
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="border p-5 mt-10">
          <img src={chef && chef.picture} alt="Chef Image" />
          <h2>{chef && chef.chef}</h2>
          <p>{chef && chef.short_bio}</p>
          <p>Like: {chef && chef.likes}</p>
          <p>ingredients:</p>
          {chef && chef.ingredients?.map((item, i) => <li key={i}>{item}</li>)}
          <p>Instructions:</p>
          {chef && chef.instructions?.map((item, i)=><li key={i}>{item}</li>)}
        </div>
      </div>
    </div>
  );
};

export default ReceipeDetails;
