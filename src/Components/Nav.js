import {useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);

    return (
   
        <div className='Nav' >
            <h3>Movie List Context</h3>
            <h2>List of Movies: {movies.length} </h2>

        </div>
    )
}

export default Nav
