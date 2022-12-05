import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";
import Application from "./pages/Application";
import Navigation from "./pages/Navigation";
import "./style-components/style.css";
import ReactMultiSelectDropdown from "./pages/ReactMultiSelectDropdown";
//import SelectItem from "./pages/SelectItem";
//import MultipleSelectItems from "./pages/MultipleSelectItems";
// const GlobalStyle = createGlobalStyle`
// body{
//   background-color: beige;
// }
// `;

function App() {
  return (
    <div className="bg-light">
      <Navigation />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      </Container>
      {/* <SelectItem />
      <MultipleSelectItems /> */}
      <ReactMultiSelectDropdown />
    </div>
  );
}

export default App;
