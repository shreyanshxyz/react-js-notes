import React from "react";
type ContextProps = {};

const Context: React.FC<ContextProps> = () => {
  const createContextSnippet = `
  import { createContext } from "react";
  
  interface ThemeProps = {};
  
  export const ThemeContext = createContext(undefined);
  `;

  const provideSnippet = `
  import { createContext, ReactNode, useState } from "react";
  
  interface ThemeProps {
    children: ReactNode;
  }

  export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
  }); 
  
  export const ThemeProvider = ({ children }: ThemeProps) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    
    const toggleTheme = () => {
      setIsDarkMode((prevState) => !prevState);
    };
    
    const theme = isDarkMode ? "dark" : "light";
    
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      </ThemeContext.Provider>
      );
    };
  `;
  const useThemeHookSnippet = `
  import { useContext } from "react";
  import { ThemeContext } from "./theme-context";
    
  export const useTheme = () => {
    return useContext(ThemeContext);
  };
  `;

  const providerWrapper = `
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/components" element={<Components />} />
          <Route path="/state" element={<ParentComponent />} />
          <Route path="/lifecycle" element={<ComponentLifecycle />} />
          <Route path="/routing" element={<Routing />} />
          <Route path="/context" element={<Context />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  `;

  const finalUsageContextSnippet = `
    import React from "react";
    import "./Navbar.css";
    import { Link } from "react-router-dom";
    import { useTheme } from "../../context/themeUtil";
    type NavbarProps = {};
    
    const Navbar: React.FC<NavbarProps> = () => {
      const { theme, toggleTheme } = useTheme();
      // console.log(theme, toggleTheme);
      return (
        <nav className="navbar__container">
          <div className="navbar__left">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </div>
          <div className="navbar__right">
            <div className="mode-switch">
              <label>
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <img
              className="nav__avatar"
              src="https://pbs.twimg.com/profile_images/1740433716420427776/N2KAWeln_400x400.jpg"
            />
            <span className="nav__name">John Doe</span>
            <button className="nav__button logout">Log Out</button>
          </div>
        </nav>
      );
    };
    export default Navbar;
  `;
  return (
    <div className="blog__container">
      <h1 className="blog__heading">Context API</h1>
      <div className="blog__text">
        The Context API is a feature in React that provides a way to manage and
        share global state across your application without the need to pass
        props manually through multiple levels of components. It's a powerful
        tool for state management, especially when you have data that needs to
        be accessible by many components at different levels in your component
        tree.
      </div>
      <div className="blog__text">
        We are going to implement the context API in this very own blog app by
        implementing dark & light mode.
      </div>
      <div className="blog__text">
        <li>
          <b>Creating a Context:</b> To use the Context API, you first need to
          create a context. You can do this by calling the React.createContext()
          function. This function returns two components: a Provider and a
          Consumer.
          <pre className="code__snippet">
            <code>{createContextSnippet}</code>
          </pre>
          <b>
            <code>ThemeContext:</code>
          </b>{" "}
          It creates a React context using the createContext function. The
          initial context value provides a default theme of "light" and an empty
          function for toggleTheme.
        </li>
        <li>
          <b>Providing Data with a Provider:</b> The Provider component is used
          to wrap a part of your component tree and provide the data that you
          want to share. It takes a value prop that holds the data you want to
          make available.
          <br />
          What I need from this context is to know whether the user wants dark
          mode or not, and a way to manipulate it.
          <br />
          So basically I need to create a darkMode state that will evaluate to
          true or false — a boolean state —, and a toggle function for darkMode.
          <br />
          Using useState is quite simple, and I can pass the toggle function and
          the state down to all my components:
          <pre className="code__snippet">
            <code>{provideSnippet}</code>
          </pre>
          <b>
            <code>ThemeProvider:</code>
          </b>{" "}
          This is a React component responsible for managing the theme state. It
          takes a children prop, which represents the components nested within
          it.
          <br />
          <b>
            <code>useState:</code>
          </b>{" "}
          It uses the useState hook to manage the isDarkMode state, initialized
          with false.
          <br />
          <b>
            <code>toggleTheme:</code>
          </b>{" "}
          This function toggles the isDarkMode state when called.
          <br />
          <b>
            <code>theme:</code>
          </b>{" "}
          It determines the current theme based on the isDarkMode state.
          <br />
          The component renders the{" "}
          <b>
            <code>ThemeContext.Provider</code>
          </b>{" "}
          with the current theme and the
          <b>
            <code> toggleTheme</code>
          </b>{" "}
          function as the context value. The nested components (
          <b>
            <code>children</code>
          </b>
          ) have access to this context.
        </li>
      </div>
      <div className="blog__text">
        <li>
          <b>Create a custom hook: </b>Create a custom hook to get the current
          context. The hook is to access the current context provided by your
          ThemeContext. It simply returns the context value, which in our case
          includes the current "theme" and the "toggleTheme" function.
          <pre className="code__snippet">
            <code>{useThemeHookSnippet}</code>
          </pre>
        </li>
      </div>
      <div className="blog__text">
        <li>
          <b>Wrap the App in our provider: </b>In your React components, you can
          use the ThemeProvider to wrap the part of your app where you want to
          provide the theme context.
          <pre className="code__snippet">
            <code>{providerWrapper}</code>
          </pre>
        </li>
      </div>
      <div className="blog__text">
        <li>
          <b>Using the useTheme hook: </b>use the useTheme hook in any component
          within that scope to access the current theme and the toggleTheme
          function.
          <pre className="code__snippet">
            <code>{finalUsageContextSnippet}</code>
          </pre>
        </li>
      </div>
    </div>
  );
};
export default Context;
