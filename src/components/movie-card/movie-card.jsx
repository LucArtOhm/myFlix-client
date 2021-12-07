import React from 'react';
import PropTypes from 'prop-types';


//This is how I extract data within the MovieCard component
export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div onClick={() => onMovieClick(movie)} className='movie-card'>{movie.Title}</div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
    ReleaseYear: PropTypes.number.isRequired,
    Actors: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.number.isRequired,
      Death: PropTypes.number.isRequired
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};