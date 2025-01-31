# Movie Search App

A React application to search for movies and display detailed information using the OMDB API.

## Table of Contents

- [Project Demo](#projectdemo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [APIs Used](#apis-used)
- [Styling](#styling)
- [Links](#links)
- [License](#license)

## Project Demo

Watch the demo of the project 
<div align="center">
  <video src="./src/assets/recording/movie-search-app.mp4" controls width="700"></video>
</div>

## Features

- Search for movies and web series using the OMDB API.
- Display a list of search results with movie posters and titles.
- View detailed information about a selected movie.
- Responsive design with a modern UI.
- Skeleton loaders for a better user experience during data fetching.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/movie-search-app.git
    cd movie-search-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Use the search bar in the navigation bar to search for movies or web series.
2. Select a movie from the search results to view detailed information.

## Project Structure

```plaintext
movie-search-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetail.jsx
│   │   ├── MoviesHome.jsx
│   │   ├── MoviesNavbar.jsx
│   │   └── SkeletonLoader.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Components

- **Loader.jsx**: Displays a loading spinner while data is being fetched.
- **MovieCard.jsx**: Represents a single movie card with an image, title, and year. It also includes a skeleton loader for better user experience.
- **MovieDetail.jsx**: Shows detailed information about a selected movie.
- **MoviesHome.jsx**: The main component that handles the search functionality and displays the list of movie cards.
- **MoviesNavbar.jsx**: The navigation bar component with a search bar.
- **SkeletonLoader.jsx**: A skeleton loader component used to indicate loading state.

## APIs Used

- **OMDB API**: Used to fetch movie data including titles, posters, and detailed information.

## Styling

- **Tailwind CSS**: Used for styling the components and ensuring a responsive design.
- **Custom CSS**: Additional custom styles defined in `App.css` and `index.css`.

## Links
- Solution URL : [GitHub Repository](https://github.com/Pushkar111/movie-search-app)
- Live Site URL : [movie-search-app]()
- Author : [Pushkar Modi](https://pushkarmodidev.netlify.app/)