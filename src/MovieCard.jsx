import React from "react";

export default class MovieCard extends React.Component {
  render() {
    var film = this.props.film;
    return (
      <div className="card d-flex h-100 " style={{ width: "18rem" }}>
        <div className="card-body ">
          <h5 className="card-title">{film.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{film.release_date}</h6>
          <p className="card-text flex-fill">{film.description}</p>
        </div>
      </div>
    );
  }
}
