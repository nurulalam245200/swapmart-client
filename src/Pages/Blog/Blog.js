import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl text-success text-center mt-5 mb-5">
        All Question Blog
      </h1>
      <p className="text-xl text-center text-red-400 font-semibold mt-5 mb-5">
        Please Click over the Question !!!
      </p>
      <div className="bg-sky-200 w-4/5 mx-auto rounded-lg">
        <div className="collapse text-center">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content w-2/3 mx-auto">
            <p>
              There are so many ways to manage a state in react
              application.Almost 4 way to define state in react.
              local,global,server,url state.you have state management in place
              data actually flows from your app to state and vice versa. <br />{" "}
              You know exactly where your data is. These state management tools
              also give you a point-in-time snapshot of the entire data.We'll
              look at the simple useState hook and also learn about more complex
              libraries like Redux. <br /> Then we'll check out the most recent
              options available like Recoil and Zustand. <br /> <br /> <br />{" "}
              1.Local state is data we manage in one or another component. Local
              state is most often managed in React using the useState hook.{" "}
              <br /> 2.Global state is data we manage across multiple
              components. Global state is necessary when we want to get and
              update data anywhere in our app, or in multiple components at
              least. <br /> 3. Data that comes from an external server that must
              be integrated with our UI state. Server state is a simple concept,{" "}
              <br /> but can be hard to manage alongside all of our local and
              global UI state.
              <br /> 4. Data that exists on our URLs, including the pathname and
              query parameters. URL state is often missing as a category of
              state, but it is an important one. <br /> In many cases, a lot of
              major parts of our application rely upon accessing URL state.
            </p>
          </div>
        </div>
        <div className="collapse text-center">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content w-2/3 mx-auto">
            <p>
              The most important difference between class- and prototype-based
              inheritance is that a class defines a type which can be
              instantiated at runtime, whereas a prototype is itself an object
              instance. <br /> The Prototypal Inheritance is a feature in
              javascript used to add methods and properties in objects. <br />{" "}
              It is a method by which an object can inherit the properties and
              methods of another object. Traditionally, <br /> in order to get
              and set the [[Prototype]] of an object, we use Object.
              getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div className="collapse text-center">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content w-2/3 mx-auto">
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, <br /> because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages. <br /> JavaScript
              Unit Testing is a method where JavaScript test code is written for
              a web page or web application module. <br /> It is then combined
              with HTML as an inline event handler and executed in the browser
              to test if all functionalities are working as desired. These unit
              tests are then organized in the test suite.
            </p>
          </div>
        </div>
        <div className="collapse text-center">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content w-2/3 mx-auto">
            <p>
              <strong> React:</strong> React is a UI library.React doesnot
              enforce a specific project structure,you can start using React
              with just a few lines of code.React can be used as a UI library to
              render elements, <br /> without enforcing a specific project
              structure, and that’s why it’s not strictly a framework. <br />{" "}
              Components are larger building blocks that define independent and
              reusable pieces to be used throughout the application. <br /> They
              accept inputs called props and produce elements that are then
              displayed to the user. <br /> <br /> <strong>Angular:</strong>{" "}
              Angular is a fully-fledged front-end framework.The Vue.js core
              library focuses on the View layer only. It’s called a progressive
              framework <br /> because you can extend its functionality with
              official and third-party packages, such as Vue Router or Vuex,{" "}
              <br /> to turn it into an actual framework.Components in Vue are
              small, self-contained, and can be reused throughout the
              application. <br /> Single File Components (SFCs) with the .vue
              extension contain HTML, CSS, and JavaScript so that all relevant
              code resides in one file.
              <br /> <br /> <strong>Vue:</strong> Vue.js is a progressive
              framework. The first version of the framework which is now known
              as AngularJS. <br /> Projects in Angular are structured into
              Modules, Components, and Services. Each Angular application has at
              least one root component <br /> and one root module.Each component
              in Angular contains a Template, a Class that defines the
              application logic, <br /> and MetaData Decorators. The metadata
              for a component tells Angular where to find the building blocks
              that it needs to create and present its view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
