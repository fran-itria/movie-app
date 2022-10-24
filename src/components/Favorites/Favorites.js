import React, { Component } from "react";
import { connect } from "react-redux";
import "./Favorites.css";
import { removeMovie } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        {this.props.favs.length > 0 ? (
          <div>
            <h2>Películas Favoritas</h2>
            <ul>
              {this.props.favs.map((movie) => (
                <li key={movie.imdbID}>
                  <span>{movie.Title}</span>
                  <button
                    onClick={() => this.props.removeMovie(movie.imdbID)}
                    className="button"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <h2 className="nofav"> No tiene peliculas en favoritos </h2>
        )}
      </div>
    );
  }
}

export default connect((state) => ({ favs: state.moviesFavourites }), {
  removeMovie,
})(ConnectedList);
