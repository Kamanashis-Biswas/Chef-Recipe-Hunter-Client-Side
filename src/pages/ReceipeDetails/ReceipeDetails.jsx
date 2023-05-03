/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReceipeDetails = () => {
  const { id  } = useParams();
  const [chef, setChef] = useState(null);
  useEffect(()=>{
    fetch(`http://localhost:5000/chef_details/${id}`).then(data=>data.json()).then(data=>{
      setChef(data);
    })
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <h2>{chef && chef.chef}</h2>
      </div>
    </div>
  );
};

export default ReceipeDetails;
