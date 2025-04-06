import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
import { useFavorites } from "../context/FavoritesContext";

export const MovieCard = ({ movie }) => {
    const [loading, setLoading] = useState(true);
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
    
    const favorite = isFavorite(movie.imdbID);

    const handleImageLoad = () => {
        setLoading(false);
    };
    const handleFavoriteClick = (e) => {
        e.preventDefault(); // Prevent navigating to detail page
        
        if (favorite) {
            removeFromFavorites(movie.imdbID);
        } else {
            addToFavorites(movie);
        }
    };
    return (
        <div className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-900 text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
            {loading && <SkeletonLoader />}
            
            <button 
                onClick={handleFavoriteClick}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-100 transition-all"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill={favorite ? "currentColor" : "none"} 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
            <Link to={`/moviedetail/${movie.imdbID}`}>
                <img
                    className={`w-full h-64 object-cover ${loading ? 'hidden' : 'block'}`}
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600?text=No+Image+Available"}
                    alt={movie.Title}
                    onLoad={handleImageLoad}
                />
                
                {!loading && (
                    <div className="p-4 bg-gray-800 bg-opacity-75 h-32 flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
                        <p className="text-gray-300">{movie.Year}</p>
                    </div>
                )}
            </Link>
        </div>
    );
};