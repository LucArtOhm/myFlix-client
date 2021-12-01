import React from 'react';

//This is how I extract data within the MovieCard component
export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return <div className='movie-card'>movie.Title</div>;
  }
}