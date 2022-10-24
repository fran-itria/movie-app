import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetail(id);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {this.props.movies === undefined ? (
          <>
            <h2>Cargando...</h2>
          </>
        ) : this.props.movies === null ? (
          <>
            <h2>No se encontro el titulo</h2>
          </>
        ) : (
          <>
            <h1>
              {this.props.movies.Title === "N/A"
                ? ""
                : `${this.props.movies.Title}`}
            </h1>
            <img src={this.props.movies.Poster} alt="" />
            <div
              style={{
                alignSelf: "flex-start",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <h4
                style={
                  this.props.movies.Type === "movie"
                    ? { color: "blue" }
                    : this.props.movies.Type === "serie"
                    ? { color: "red" }
                    : { color: "green" }
                }
              >
                {this.props.movies.Type === "N/A"
                  ? ""
                  : `Type: ${this.props.movies.Type}`}
              </h4>
              <h4>
                {this.props.movies.Language === "N/A"
                  ? ""
                  : `Language: ${this.props.movies.Language}`}
              </h4>
              <h4>
                {this.props.movies.Year === "N/A"
                  ? ""
                  : `Año: ${this.props.movies.Year}`}
              </h4>
              <h4>
                {this.props.movies.Runtime === "N/A"
                  ? ""
                  : `Time: ${this.props.movies.Runtime}`}
              </h4>
              <h4>
                {this.props.movies.Actors === "N/A"
                  ? ""
                  : `Actors: ${this.props.movies.Actors}`}
              </h4>
              <h4>
                {this.props.movies.Director === "N/A"
                  ? ""
                  : `Director: ${this.props.movies.Director}`}
              </h4>
              <h4>
                {this.props.movies.Awards === "N/A"
                  ? ""
                  : `Awards: ${this.props.movies.Awards}`}
              </h4>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default connect((state) => ({ movies: state.movieDetail }), {
  getMovieDetail,
})(Movie);
