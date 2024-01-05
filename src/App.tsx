import "./App.css";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import BasicForm from "./features/basic-form/BasicForm";

function App() {
  console.log("App component has fired");

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <Link to="basic-form" target="_blank" rel="noopener noreferrer">
        1
      </Link>

      <Routes>
        <Route path="/basic-form" element={<BasicForm />} />
        <Route />
        <Route />
        <Route />
      </Routes> */}
      <Routes>
        <Route path="basic-form" element={<BasicForm />} />
      </Routes>
    </div>
  );
}

export default App;
