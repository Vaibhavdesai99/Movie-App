import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<h1>Movie details</h1>} />
          <Route path="/movies/:type" element={<h1>Movie list page</h1>} />
          <Route path="/*" element={<h1>Error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
