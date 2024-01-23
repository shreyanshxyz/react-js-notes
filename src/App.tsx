import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Components from "./pages/Blog/Components";
import ParentComponent from "./pages/States/ParentComponent";
import ComponentLifecycle from "./pages/Blog/ComponentLifecycle";
import Routing from "./pages/Blog/Routing";
import Context from "./pages/Blog/Context";
import { ThemeProvider } from "./context/theme-context";
import Hooks from "./pages/Blog/Hooks";

function App() {
  return (
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
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
