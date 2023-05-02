/* eslint-disable no-unused-vars */
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 md:w-1/3 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photo" value="Your Name" />
          </div>
          <TextInput
            id="photo"
            name="photo"
            type="text"
            placeholder="Photo URL"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            name="password"
            required={true}
            shadow={true}
          />
        </div>
        <div></div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" onClick={handleAccepted} />
          <Label htmlFor="agree">
            I agree with the
            <a
              href="/forms"
              className="text-blue-600 m-[5px] hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button disabled={!accepted} type="submit">
          Register new account
        </Button>
      </form>
    </div>
  );
};

export default Register;