import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { getMovies, addMovie } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="init">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              autoFocus
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="button">
            BUSCAR
          </button>
        </form>
        {this.props.movies.length > 0 ? (
          <>
            <p>
              Haciendo click en el titulo de la pelicula te llevara a un breve
              detalle de esta, los que aparecen pintados en rojo son las
              peliculas que ya has visitado, y podras agregarlas a favoritas
              clickeando donde dice FAV
            </p>
            <ul className="movieList">
              {this.props.movies.map((movie) => (
                <li key={movie.imdbID} className="movieItem">
                  <Link to={`/movie/${movie.imdbID}`} className="linkTo">
                    {movie.Title}
                  </Link>
                  <button
                    onClick={() => this.props.addMovie(movie)}
                    disabled={this.props.fav.find(
                      ({ imdbID }) => imdbID === movie.imdbID
                    )}
                    className="button"
                  >
                    FAV
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    movies: state.moviesLoaded,
    fav: state.moviesFavourites,
  }),
  { getMovies, addMovie }
)(Buscador);
