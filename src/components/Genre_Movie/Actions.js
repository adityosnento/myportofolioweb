import React from 'react';
import {connect} from 'react-redux';
import './Cardmovie.scss';
import {GET_MOVIE_ACTION} from '../../store/actions/movie_data'

const MOVIE_ACTION = ({GET_MOVIE_ACTION, movies}) => {
    
    React.useEffect(() => {
        GET_MOVIE_ACTION();
    }, [GET_MOVIE_ACTION])
   console.log('res', movies)
    
    const lists = movies.map(item => 
        <div key={item.movie_detail._id} className="card-container">
        <img
            src={item.movie_detail[0].poster} 
            alt="movie_picture"
        />
        <h3>{item.movie_detail[0].title}</h3>
        <p>{item.movie_detail[0].genre[0]}</p>
    </div>
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

export default connect(mapStateToProps, {GET_MOVIE_ACTION})(MOVIE_ACTION);