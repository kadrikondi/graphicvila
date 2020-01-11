import React, { Component } from "react";
import GraphicList from "./graphics";
export default class allgraphics extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <GraphicList />
        </div>
      </div>
    );
  }
}
