import React from "react";
type RoutingProps = {};

const Routing: React.FC<RoutingProps> = () => {
  const routerImport = `import { BrowserRouter as Router, Route, Link } from 'react-router-dom';`;
  const routerWrapper = `
  <Router>
  {/* Your application components and routes go here */}
  </Router>
  `;
  const routesSnippet = `
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
  `;
  const linkSnippet = `
  <Link to="/home">Home</Link>
  <Link to="/about">About</Link>
  `;
  return (
    <div className="blog__container">
      <h1 className="blog__heading">React Routing & Navigation</h1>
      <h4 className="blog__subheading">React-Router</h4>
      <div className="blog__text">
        React Router is a popular library in the React ecosystem that enables
        navigation and routing in single-page applications. It allows you to
        define different "routes" for your application, where each route
        corresponds to a different view or component.
      </div>
      <h4 className="blog__subheading">How to use React Router:</h4>
      <ul>
        <li>Install React Router using npm or yarn:</li>
        <pre className="code__snippet">
          <code>npm install react-router-dom</code>
        </pre>
        <li>Import necessary components from react-router-dom:</li>
        <pre className="code__snippet">
          <code>{routerImport}</code>
        </pre>
        <li>Wrap your application with a Router component:</li>
        <pre className="code__snippet">
          <code>{routerWrapper}</code>
        </pre>
        <li>Define routes using the "Route" component</li>
        <pre className="code__snippet">
          <code>{routesSnippet}</code>
        </pre>
        <li>
          Use the "Link" component to interwine links between the route
          components
        </li>
        <pre className="code__snippet">
          <code>{linkSnippet}</code>
        </pre>
      </ul>
    </div>
  );
};
export default Routing;
