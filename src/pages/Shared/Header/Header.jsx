/* eslint-disable no-unused-vars */
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://i.ibb.co/415RpMN/Untitled-1.png"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Chef Corner
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
          <Link to='login'><button>Login</button></Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
