import React from "react";
import classes from "./Car.module.css";
import withClass from "../hoc/withClass";
import PropTypes from "prop-types";

/* function car() {
  return <h2>This is a car component</h2>;
} */

/* const car = () => {
  return <h2>This is a car component</h2>;
}; */

/* const car = () => <h2>This is a car component</h2>; */

/* export default car; */

/* class Car extends React.Component {} */

class Car extends React.Component {
  /* componentWillReceiveProps(nextProps) {
    console.log("Car componentWillReceiveProps", nextProps);
  } */

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log("Car shouldComponentUpdate", nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  } */

  /* componentWillUpdate(nextProps, nextState) {
    console.log("Car componentWillUpdate", nextProps, nextState);
  } */

  /* static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Car getDerivedStateFromProps", nextProps, prevState);

    return prevState;
  } */

  /* componentDidUpdate() {
    console.log("Car componentDidUpdate");
  } */

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index === 0) this.inputRef.current.focus();
  }

  /* getSnapshotBeforeUpdate() {
    console.log("Car getSnapshotBeforeUpdate");
  } */

  /* componentWillUnmount() {
    console.log("Car componentWillUnmount");
  } */

  render() {
    const inputClasses = [classes.input];

    if (this.props.name !== "") {
      inputClasses.push(classes.green);
    } else {
      inputClasses.push(classes.red);
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold);
    }

    return (
      <React.Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>
          Year:
          <strong> {this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        ></input>
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withClass(Car, classes.Car);
