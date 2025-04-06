import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

export const MoviesHome = () => {
    const location = useLocation();
    // const movies = location.state?.movies || [];
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // If movies are passed via state, use them
        if (location.state?.movies) {
            setMovies(location.state.movies);
        } 
        // Otherwise fetch default movies when component mounts
        else {
            setLoading(true);
            fetchDefaultMovies();
        }
    }, [location.state?.movies]);

    const fetchDefaultMovies = async () => {
        try {
            const response = await axios.get("https://www.omdbapi.com/?apikey=1e994a5&s=avengers&type=movie");
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            }
        } catch (error) {
            console.error("Error fetching default movies:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loader/>;
    }


    return (
        <div className="flex justify-center items-center bg-gray-900 text-white p-4 shadow-lg min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};
