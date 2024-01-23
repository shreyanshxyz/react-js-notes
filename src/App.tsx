import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Components from "./pages/Blog/Components";
import ParentComponent from "./pages/States/ParentComponent";
import ComponentLifecycle from "./pages/ComponentLifecycle/ComponentLifecycle";
import Routing from "./pages/Routing/Routing";
import Context from "./pages/ContextAPI/Context";

function App() {
  return (
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
  );
}

export default App;
