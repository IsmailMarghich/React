import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    /*when our component gets placed, we get location from user*/
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        /*updating state using setState*/
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  /*this helper function will determine what content gets rendered*/
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      /*if we have an error*/
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; /*if we have a latitude*/
    }

    return (
      <div>
        <Spinner />
      </div>
    ); /*if we have neither*/
  }

  render() {
    return (
      <div style={{ border: "6px solid #2797d4" }}>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
