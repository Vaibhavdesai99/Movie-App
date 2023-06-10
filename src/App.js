import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import MovieList from "./MovieList/MovieList";
import MovieDetail from "./Pages/MovieDetails/MovieDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
