/* eslint-disable no-unused-vars */

import { Button } from "flowbite-react";
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="container mx-auto p-3">
      <div ref={ref}>
        <div>
          <h2 className="text-lg font-bold">
            Q1. Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p className="mt-3 underline">Uncontrolled Components:</p>
          <div className="ml-4">
            <p>1. Form data is managed by the DOM.</p>
            <p>2. Form elements hold their own state internally.</p>
            <p>3. Values are accessed through references to DOM elements.</p>
            <p>
              4. Synchronizing form data with the apppcation state can be
              challenging.
            </p>
          </div>
          <p className="mt-4 underline">Controlled Components:</p>
          <div className="ml-4">
            <p>1. Form data is managed and controlled by the component.</p>
            <p>2. Values of form elements are controlled by state variables.</p>
            <p>3. React event handlers update the state with new values.</p>
            <p>
              4. Easier to implement validation, conditional rendering, and
              manipulate form data.
            </p>
            <p>5. Application has full control over the form data.</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mt-3">
            Q2. How to validate React props using PropTypes?
          </h2>
          <p className="mt-3 underline">
            This is the way to validate React props using PropTypes:
          </p>
          <div className="ml-4">
            <p>1. Install the prop-types package.</p>
            <p>2. Import the PropTypes module into your component file.</p>
            <p>
              3. Define the propTypes for your component using the propTypes
              static property for class components or a PropTypes object for
              functional components.
            </p>
            <p>
              4. Specify the PropTypes for each prop using the appropriate
              PropTypes validators, such as PropTypes.string, PropTypes.number,
              or PropTypes.arrayOf(PropTypes.string).
            </p>
            <p>
              5. React will automatically check the provided props against the
              specified PropTypes and display warnings in the console if there
              are any validation errors.
            </p>
            <p>
              6. Make sure to test your code thoroughly during development, as
              PropTypes are only checked in development mode and not in
              production builds.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mt-3">
            Q.3 Tell us the difference between nodejs and express js.
          </h2>
          <p className="mt-3 underline">Node.Js</p>
          <p className="ml-4">
            Node.js acts as a runtime environment that enables developers to run
            JavaScript code on the server-side, utilizing the powerful V8
            JavaScript engine. It comes with built-in modules and APIs, making
            it suitable for developing server-side applications, REST APIs,
            real-time applications, and command-line tools. Node.js leverages
            its non-blocking, event-driven architecture and supports
            asynchronous programming, which allows for efficient handling of
            concurrent requests and I/O operations.
          </p>
          <p className="mt-3 underline">Express Js</p>
          <p className="ml-4">
            Express.js is a lightweight web application framework that is built
            on top of Node.js. It provides a range of features and utilities to
            simplify web application development, including handling HTTP
            requests, routing, middleware, and view rendering. Express.js
            follows a minimalist approach, allowing developers to create
            flexible and customizable web applications by selecting additional
            libraries and components. With its simplicity, flexibility, and ease
            of use, Express.js has become a popular choice for building web
            applications and APIs using Node.js as the underlying foundation.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mt-3">
            Q4. What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="mt-3">
            {" "}
            a custom hook in React is a JavaScript function that utilizes
            built-in hooks and allows you to encapsulate reusable logic and
            stateful behavior. Creating a custom hook offers several benefits
            such as reusability, abstraction of complex logic, and managing
            stateful logic. By extracting common logic into a custom hook, you
            can reuse it across multiple components, keep your codebase clean
            and organized, and promote code reuse. Custom hooks provide a way to
            modularize and share functionality, enhancing code readability,
            maintainability, and efficiency in React applications.
          </p>
        </div>
      </div>
      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => <Button className="my-10" color="purple" pill={true} onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
    </div>
  );
};

export default Blog;
