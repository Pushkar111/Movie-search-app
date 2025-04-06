import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    
    // Load favorites from localStorage on mount
    useEffect(() => {
        const storedFavorites = localStorage.getItem('movieFavorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);
    
    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('movieFavorites', JSON.stringify(favorites));
    }, [favorites]);
    
    const addToFavorites = (movie) => {
        setFavorites(prev => {
            // Check if movie already exists in favorites
            if (!prev.some(fav => fav.imdbID === movie.imdbID)) {
                return [...prev, movie];
            }
            return prev;
        });
    };
    
    const removeFromFavorites = (imdbID) => {
        setFavorites(prev => prev.filter(movie => movie.imdbID !== imdbID));
    };
    
    const isFavorite = (imdbID) => {
        return favorites.some(movie => movie.imdbID === imdbID);
    };
    
    return (
        <FavoritesContext.Provider value={{ 
            favorites, 
            addToFavorites, 
            removeFromFavorites, 
            isFavorite 
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};