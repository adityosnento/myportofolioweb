import React from 'react';
import {connect} from 'react-redux';
import './Cardmovie.scss';
import {Link} from 'react-router-dom';
import {getMovies} from '../../store/actions/movie_data'

const CardMovie = ({getMovies, movies}) => {
    
    React.useEffect(() => {
        getMovies();
    }, [getMovies])
   console.log('res', movies)
    
    const lists = movies.map(item => 
    <Link to="/main" key={item.movie_detail._id} className="card-container">
        <img
            src={item.movie_detail[0].poster} 
            alt="movie_picture"
        />
        <h3>{item.movie_detail[0].title}</h3>
        <p>{item.movie_detail[0].genre[0]}</p>
    </Link>
        )
         
    
    return (
        <div className="body-container">
           {lists}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movieData.movies
    }
}   

export default connect(mapStateToProps, {getMovies})(CardMovie);