import React from "react";
import "./style.css";
type ComponentsProps = {};

const Components: React.FC<ComponentsProps> = () => {
  const domTree = `
  - Document (root)
    - html
      - head
        - title
          - "My Title"
        - body
          - h1
            - "A Heading"
          - a
            - href
            - "Link text"
            `;
  return (
    <div className="blog__container">
      <h2 className="blog__heading">Virtual DOM & ReactJS Components</h2>
      <h4 className="blog__subheading">Virtual DOM</h4>
      <div className="blog__text">
        In a web application, the DOM{" "}
        <span className="highlight">(Document Object Model)</span> represents
        the structure of the HTML document.{""}
        <span className="highlight">
          The Real DOM is the actual browser representation of the DOM, and it
          can be slow and inefficient to directly manipulate. The Virtual DOM,
          on the other hand, is an in-memory representation of the Real DOM
          created by React.
        </span>
      </div>
      <div className="blog__text">
        The DOM represents a document with a logical tree. Each branch of the
        tree ends in a node, and each node contains objects. DOM methods allow
        programmatic access to the tree. With them, you can change the
        document's structure, style, or content.
      </div>
      <div className="blog__sider">
        <img
          className="blog__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png"
        />
        <div className="blog__text">
          In an HTML DOM, every element is a node.
          <ul>
            <li>A document is a document node.</li>
            <li>All HTML elements are element nodes.</li>
            <li>
              All HTML attributes are attribute nodes. eg. style, src, href,
              etc.
            </li>
            <li>Text inserted into HTML elements are text nodes.</li>
          </ul>
        </div>
      </div>
      <div className="blog__text">
        For example, an HTML document with the above structure, will be
        represented in the dom as:
        <pre className="code__snippet">
          <code>{domTree}</code>
        </pre>
        Where root is the head node and everything will be the following
        children and children nodes.
      </div>
      <div className="blog__text">
        <span className="highlight">
          When data in your React application changes, React doesn't immediately
          update the Real DOM. Instead, it first updates the Virtual DOM, which
          is much faster. React then compares the current Virtual DOM with the
          previous one, determining the difference (or "diff") between them.
        </span>{" "}
        This process is called reconciliation.
      </div>
      <div className="blog__text">
        <span className="highlight">
          By knowing which parts of the Virtual DOM have changed, React can
          minimize the number of updates needed on the Real DOM.
        </span>{" "}
        It only updates the specific parts of the Real DOM that have changed,
        rather than re-rendering the entire page. This makes React applications
        fast and efficient.
      </div>
      <div className="blog__text">
        <span className="highlight">
          React batches multiple updates together and applies them in a single
          pass,
        </span>{" "}
        further optimizing performance.
      </div>
      <hr />

      <h4 className="blog__subheading">ReactJS Components</h4>
      <div className="blog__text">
        React components are JavaScript classes or functions that define how a
        part of the user interface should appear and behave. They allow you to
        create reusable, self-contained pieces of code that can be composed
        together to build your application's UI.
      </div>
      <div className="blog__text">
        There are two main types of React components:
        <li className="blog__listitem">
          Functional Components: These are defined as JavaScript functions and
          are simpler and more lightweight. They receive props (input data) and
          return JSX elements to describe the UI.
        </li>
        <li className="blog__listitem">
          Class Components: These are defined as JavaScript classes that extend
          the <span className="code__snippet">React.Component</span> class. They
          have additional features like state and lifecycle methods, making them
          more powerful and flexible.
        </li>
      </div>
    </div>
  );
};
export default Components;
