import React from "react";
import FileHeader from "./FileHeader";
import MovieCard from "./MovieCard";
import './App.css';

class App extends React.Component {
  componentWillMount() {
    this.getFilmsData();
  }
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }
  getFilmsData = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(data => data.json())
      .then(res => this.setState({ films: res }));
  };
  render() {
    return (
      <div className='main'>
        <FileHeader className='header'/>
        <div className="container-fluid">
          <div className="row row-eq-height justify-content-center">
            {this.state.films.map(film => (
              <div key={film.id} className="col-sm-3 m-3">
                <MovieCard film={film} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
