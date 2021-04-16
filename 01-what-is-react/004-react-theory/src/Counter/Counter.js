import React, { Component } from "react";
import Auxiliary from "../hoc/Auxilary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    //this.setState({ counter: this.state.counter + 1 });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    return (
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <Counter2 />
        <button onClick={this.addCounter}>+</button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </Auxiliary>
    );

    // To get rid of the useless <div> it is possible to return DOM elements in array
    /* return [
      <h2 key={"1"}>Counter {this.state.counter}</h2>,
      <button key={"2"} onClick={this.addCounter}>
        +
      </button>,
      <button
        key={"3"}
        onClick={() => this.setState({ counter: this.state.counter - 1 })}
      >
        -
      </button>,
    ]; */
  }
}
