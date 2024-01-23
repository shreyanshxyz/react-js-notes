import React from "react";

type AxiosVsFetchProps = {};

const AxiosVsFetch: React.FC<AxiosVsFetchProps> = () => {
  return (
    <div className="blog__container">
      <h1 className="blog__heading">Axios vs. Fetch For Fetching APIs</h1>
      <div className="blog__text">
        For web applications to communicate with servers using the HTTP
        protocol, developers commonly use Fetch or Axios. Both are similar, but
        some prefer Axios for their simplicity. However, Fetch, a built-in API,
        is also powerful and can do what Axios does.
      </div>
      <h4 className="blog__subheading">fetch()</h4>
      <div className="blog__text">
        The Fetch API provides a fetch() method defined on the window object. It
        also provides a JavaScript interface for accessing and manipulating
        parts of the HTTP pipeline (requests and responses). The fetch method
        has one mandatory argument- the URL of the resource to be fetched. This
        method returns a Promise that can be used to retrieve the response to
        the request.
        <ul>
          <li>Axios has url in request object.</li>
          <li>
            Axios is a stand-alone third party package that can be easily
            installed.
          </li>
          <li>
            Axios enjoys built-in XSRF (Cross-Site Request Forgery (CSRF) is an
            attack that forces an end user to execute unwanted actions on a web
            application in which they’re currently authenticated.) protection.
          </li>
          <li>Axios performs automatic transforms of JSON data.</li>
          <li>Axios uses the data property.</li>
        </ul>
      </div>
      <h4 className="blog__subheading">Fetching Data with Axios</h4>
      <pre className="code__snippet">
        <code>{fetchCodeSnippet}</code>
      </pre>
      <hr />
      <h4 className="blog__subheading">axios</h4>
      <div className="blog__text">
        Axios is a Javascript library used to make HTTP requests from node.js or
        XMLHttpRequests from the browser and it supports the Promise API that is
        native to JS ES6. It can be used intercept HTTP requests and responses
        and enables client-side protection against XSRF. It also has the ability
        to cancel requests.
        <ul>
          <li>Fetch has no url in request object.</li>
          <li>
            Fetch is built into most modern browsers; no installation is
            required as such.
          </li>
          <li>Fetch does not have built in XSRF protection.</li>
          <li>
            Fetch is a two-step process when handling JSON data- first, to make
            the actual request; second, to call the .json() method on the
            response.
          </li>
          <li>Fetch uses the body property.</li>
        </ul>
      </div>
      <h4 className="blog__subheading">Fetching Data with Axios</h4>
      <pre className="code__snippet">
        <code>{axiosCodeSnippet}</code>
      </pre>
      <hr />
    </div>
  );
};
export default AxiosVsFetch;

const fetchCodeSnippet = `fetch('path-to-the-resource-to-be-fetched')
  .then((response) => {
    // Code for handling the response
  })
  .catch((error) => {
    // Code for handling the error
  });`;

const axiosCodeSnippet = `axios.get('url')
  .then((response) => {
    // Code for handling the response
  })
  .catch((error) => {
    // Code for handling the error
  })`;
