import React from 'react';
import {connect} from 'react-redux';
import {getMovies, addMovie, deleteMovie} from './store/actions/movie'
import './App.css'

const App = ({movies, getMovies, addMovie, deleteMovie}) => {
  
  const [title, setTitle] = React.useState ("");

  React.useEffect(() => {
    getMovies();
  },[getMovies])

  const lists = movies.map(item => 
  <li key={item.id}>
    {item.title}
    <button onClick={() => deleteMovie(item.id)}>delete</button>
  </li> 
  )

  const change = e => {
    setTitle(e.target.value)
  }

  const submit = e => {
    e.preventDefault ()
    addMovie(title)
    setTitle("")
  }

  
  return (
    <div className="App">
        <h1>Hello World</h1>
        <form onSubmit={submit}>
          <input
          style={{width:"100%"}}
          type ="text"
          value = {title}
          onChange= {change}
          placeholder="title"
          />
          <button onClick={getMovies}>Submit</button>
        </form>
        <ol>
          {lists}
        </ol>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    movies: state.movieReducer.movies
  }
}


export default connect (mapStateToProps, {getMovies, addMovie, deleteMovie}) (App);
