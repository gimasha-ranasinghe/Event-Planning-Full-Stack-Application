import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEvent from "./events/AddEvent";
import EditEvent from "./events/EditEvent";
import ViewEvent from "./events/ViewEvent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addevent" element={<AddEvent />} />
          <Route exact path="/editevent/:id" element={<EditEvent />} />
          <Route exact path="/viewevent/:id" element={<ViewEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
