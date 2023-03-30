import NavbarComponent from "./layout/navbar/navbar";
import Home from "./Page/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./Page/DetailPage/moviedetails";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
