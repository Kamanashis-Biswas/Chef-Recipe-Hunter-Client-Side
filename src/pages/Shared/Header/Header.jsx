/* eslint-disable no-unused-vars */
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
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
        {user && (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={user && user.photoURL}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user && user.displayName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user && user.email}
                </span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        )}
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
          {!user && (
            <Link to="login">
              <button>Login</button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
