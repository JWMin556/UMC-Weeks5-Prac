import React, { Component } from "react";
import Ad from "./Ad";

export default class AdPage extends Component {
  state = {
    showAd: true
  };

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd
    }));
  };

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          광고 {this.state.showAd ? "안보기" : "보기"}
        </button>
      </div>
    );
  }
}
