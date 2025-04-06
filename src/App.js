import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MoviesNavbar } from "./components/MoviesNavbar";
import { MovieDetail } from "./components/MovieDetail";
import { MoviesHome } from "./components/MoviesHome";
import { MoviesFavorites } from "./components/MoviesFavorites";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
    return (
        <FavoritesProvider>
            <div className="App">
                <MoviesNavbar/>
                <Routes>
                <Route path="/" element={<MoviesHome/>}></Route>
                    <Route path="/moviedetail/:imdbID" element={<MovieDetail/>}></Route>
                    <Route path="/favorites" element={<MoviesFavorites/>}></Route>
                </Routes>
            </div>
        </FavoritesProvider>
    );
}

export default App;
