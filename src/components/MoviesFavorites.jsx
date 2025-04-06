import React from 'react';
import { MovieCard } from './MovieCard';
import { useFavorites } from '../context/FavoritesContext';

export const MoviesFavorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className="flex justify-center bg-gray-900 text-white p-4 shadow-lg min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">My Favorite Movies</h1>
                
                {favorites.length === 0 ? (
                    <div className="text-center text-gray-400 py-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <p className="text-xl">You haven't added any favorites yet.</p>
                        <p className="mt-2">Browse movies and click the heart icon to add them here!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};