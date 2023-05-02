/* eslint-disable no-unused-vars */
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto">
      <form className="flex flex-col gap-4 md:w-1/3 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex items-center gap-2">
          <p>Forget your Password?</p>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
