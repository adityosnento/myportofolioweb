import React, { useState, useEffect } from "react";
import "../Categorydetail/filterdetail.scss";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Synopsis from "../DetailPage/Overview/Overview";
import Cast from "../DetailPage/Cast/Moviedesc";
import Review from "../DetailPage/Review/Review";
import { movieDetail } from "../../store/actions/movie_data";

const Filterdetail = ({ movieDetail, movies }) => {
  const [detail, setDetail] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    movieDetail(id);
  }, [movieDetail]);

  //     switch(detail){
  //        case 2:
  //            return <Cast/>
  //         case 3:
  //             return <Review/>
  //         default:
  //             return <Synopsis/>
  //    }
  

  if (!movies) return <div>loading..</div>

  return (
    <div className="detail-container">
        <div id="Synopsis" className="overview-container">
      <h3>Synopsis</h3>
      <p>{movies.synopsis}</p>
      <h3>Movie Info</h3>
      <div className="movie-info">
        <ul className="bold">
          <li>Release date:</li>
          <li>Director :</li>
          <li>Rating:</li>
          <li>Writers:</li>
        </ul>
        <ul>
          <li>{movies.year}</li>
          <li>{movies && movies.directors && movies.directors[0].name}</li>
          <li>{movies.rating} of 10</li>
          <li>{movies && movies.directors && movies.writers[0].name}</li>
        </ul>
      </div>
    </div>
    <div className="desc-container">
           <div className="cast-title">
               <h3 id="Cast">Series of Cast</h3>
               <ol className="people">
                   <li className="card">
                       <img 
                        src={movies.image} 
                        alt="logo"
                        />
                        <p className="cast-name">James Taylor</p>
                        <p className="character">Obi-Wan Kenobi, </p>
                   </li>
               </ol>

           </div>
        </div>
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movieData.movies
  };
};

export default connect(mapStateToProps, { movieDetail })(Filterdetail);
