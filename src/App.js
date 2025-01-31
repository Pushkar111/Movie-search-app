import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MoviesNavbar } from "./components/MoviesNavbar";
import { MovieDetail } from "./components/MovieDetail";
import { MoviesHome } from "./components/MoviesHome";

function App() {
    return (
        <div className="App">
            <MoviesNavbar/>
            <Routes>
                <Route path="/" element={<MoviesHome/>}></Route>
                <Route path="/moviedetail/:imdbID" element={<MovieDetail/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
