import { useState, createContext } from 'react'
import MovieList from './MovieList';

export const MovieContext = createContext();


export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 2315
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 215456
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23156544
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}


