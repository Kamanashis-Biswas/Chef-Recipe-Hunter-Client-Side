/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeakerIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Button } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReceipeDetails = () => {
  const notify = () => toast("Add to favourite!");
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
        <h2 className="text-2xl md:text-4xl font-bold mt-10 md:mt-20 mb-5 md:mb-10 text-center">
          Recipe Details
        </h2>
        <div className="p-5 mt-10">
          <img
            className="md:w-[400px] rounded-2xl mb-3"
            src={chef && chef.picture}
            alt="Chef Image"
          />
          <h2 className="text-4xl font-bold mb-3">{chef && chef.chef}</h2>
          <p className="font-semibold text-xl mb-3">{chef && chef.short_bio}</p>
          <div className="flex gap-2">
            <HeartIcon className="w-[20px] mb-3"></HeartIcon>
            <p className="mb-3">Like: {chef && chef.likes}</p>
          </div>
          <p className="font-bold mb-3">Recipe Name: {chef && chef.name}</p>
          <p className="underline mb-1 text-2xl">Item of Cooking:</p>
          {chef &&
            chef.ingredients?.map((item, i) => (
              <li className="md:text-lg" key={i}>
                {item}
              </li>
            ))}
          <p className="underline mb-1 text-2xl">Procedure of Cooking:</p>
          {chef &&
            chef.instructions?.map((item, i) => (
              <li className="md:text-lg" key={i}>
                {item}
              </li>
            ))}
        </div>

        <Button onClick={notify}>Add to favourite</Button>
      </div>
    </div>
  );
};

export default ReceipeDetails;
