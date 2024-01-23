import React from "react";

type HigherOrderComponentsProps = {};

const HigherOrderComponents: React.FC<HigherOrderComponentsProps> = () => {
  return (
    <div className="blog__container">
      <h1 className="blog__heading">Higher Order Components</h1>
      <h4 className="blog__subheading">HOCs in ReactJS</h4>
      <div className="blog__text">
        A Higher-Order Component (HOC) is a design pattern in React where a
        function takes a component and returns a new component with added or
        modified behavior. HOCs are used for code reuse, prop manipulation, and
        abstracting away common functionality. They allow you to enhance or
        extend the functionality of your components.
        <pre className="code__snippet">
          <code>{hocSnippet}</code>
        </pre>
      </div>
    </div>
  );
};
export default HigherOrderComponents;

const hocSnippet = `const withLogging = (WrappedComponent) => {
  return class WithLogging extends React.Component {
    componentDidMount() {
      console.log("Component '$'{WrappedComponent.name} mounted");
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const EnhancedComponent = withLogging(MyComponent);`;
