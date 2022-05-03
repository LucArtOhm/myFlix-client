import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      showRegistrationForm: false, // this will help to toggle the registration view
    };
  }

  componentDidMount() {
    axios.get('https://movies-your-favorites.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // When a movie is clicked, this function is invoked and updates the state of the 'selectedMovie' property to that movie
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  // When a user successfully logs in, this function updates the 'user' property in state to that particular user
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegistered(user) {
    console.log("Go to login page for authenticating")
  }


  toggleRegisterView(e) {
    e.preventDefault();
    this.setState({
      showRegistrationForm: !this.state.showRegistrationForm,
      user: !this.state.user
    });
  }

  render() {
    const { movies, selectedMovie, user, showRegistrationForm } = this.state;

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} clickHandler={(e) => this.toggleRegisterView(e)} />;

    // Before the movies have been loaded
    if (movies.length === 0) return <div className='main-view' />;

    // 
    if (!showRegistrationForm) return <RegistrationView onRegistration={(user) => this.onRegistered(user)} clickHandler={(e) => this.toggleRegisterView(e)} />;

    return (
      <div className='main-view'>


        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
          ))
        }
      </div>
    );
  }
}