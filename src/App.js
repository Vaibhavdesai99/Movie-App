import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import MovieList from "./MovieList/MovieList";
import MovieDetail from "./Pages/MovieDetails/MovieDetail";
import Frontpage from "./FrontPage/Frontpage";
import SignIn from "./SignIn/SignIn";
import FrequentlyAskedQue from "./FAQ/FrequentlyAskedQue";
import { useSelector } from "react-redux";
import ContactUs from "./ContactUS/ContactUs";

function App() {
  const isLogIn = useSelector((state) => state.auth.isLogIn);
  console.log(isLogIn);

  return (
    <div className="App">
      <Router>
        {isLogIn && <Header />}
        <Routes>
          <Route index element={<Frontpage />} />
          <Route path="/Home" index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error page</h1>} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="/FAQ" element={<FrequentlyAskedQue />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
