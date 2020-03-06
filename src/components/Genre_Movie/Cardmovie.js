import React, {useState} from 'react';
import {connect} from 'react-redux';
import './Cardmovie.scss';
import {Link} from 'react-router-dom';
import {getMovies, GET_MOVIE_FILTER} from '../../store/actions/movie_data'

const CardMovie = ({getMovies, movies}) => {
    
    const doPage=getMovies;
    const response=movies;
    
    React.useEffect(() => {
        getMovies();
    }, [getMovies])
   console.log('res', movies)
    
    const lists = movies && movies.docs.map(item => 
    <Link to="/main" key={item._id} className="card-container">
        <img
            src={item.poster} 
            alt="movie_picture"
        />
        <h3>{item.title}</h3>
        <p>{item.genres[0].genre}</p>
    </Link>
        )

        
        const genre = movies && movies.docs.map(genre => 
            <a>{genre.genre}</a>
        )
    
        const pagination = [];
        if(response.prevPage) pagination.push(<h3 key='page-prev' className="hover mx-1" onClick={ () => doPage(response.prevPage) }>&lt;</h3>)
        for (let i = 1; i <= response.totalPages; i++) {
            pagination.push(
                (response.page === i) 
                ? <h3 key={'page-'+i} className="text-black mx-1">{i}</h3>
                : <h3 key={'page-'+i} className="hover mx-1" onClick={ () => doPage(i) }>{i}</h3>
                )   
            }
            if(response.nextPage) pagination.push(<h3 key='page-next' className="hover mx-1" onClick={ () => doPage(response.nextPage) }>&gt;</h3>)
            
            console.log(response,pagination)
     

    return (
        <div className="body-container">
        {genre}
           {lists}
           {pagination}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movieData.movies
    }
}   

export default connect(mapStateToProps, {getMovies})(CardMovie);