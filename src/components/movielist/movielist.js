import './movielist.css'
import MovieCard from "../moviecard/moviecard";

const MovieList = (props)=>{
    const{movies} = props
    return(
       <div className={'h-container'}>
           {movies.map(m=> <MovieCard movieprops={m}/> ) }
          
       </div>
    )
}
export default MovieList