import React, { Component } from "react";
import "./App.scss";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    //console.log("App constructor");
    super(props);

    this.state = {
      clicked: false,
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda", year: 2010 },
      ],
      pageTitle: "React components",
      showCars: false,
    };
  }

  toggleCarsHandler = () => {
    this.setState({ showCars: !this.state.showCars });
  };

  /* changeTitleHandler = (pageTitle) => {
    this.setState({ pageTitle });
  }; */

  /* handleInput = (event) => {
    this.setState({ pageTitle: event.target.value });
  }; */

  onChangeName(name, index) {
    //console.log(name, index);
    const car = this.state.cars[index];
    car.name = name;

    // Cloning the array
    //const cars = this.state.cars.concat();
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars,
    });
  }

  deleteHandler = (index) => {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({ cars });
  };

  /* componentWillMount() {
    //console.log("App componentWillMount");
  } */

  componentDidMount() {
    //console.log(`App componentDidMount`);
  }

  render() {
    //console.log(`App render`);
    const divStyle = {
      textAlign: "center",
    };

    //const cars = this.state.cars;

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={(event) =>
                this.onChangeName(event.target.value, index)
              }
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        {/* <input type="text" onChange={this.handleInput}></input> */}
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <hr />

        <button
          style={{ marginTop: 20 }}
          onClick={() => this.setState({ clicked: true })}
        >
          Change clicked
        </button>

        <button
          style={{ marginTop: 20 }}
          className={"AppButton"}
          onClick={this.toggleCarsHandler}
        >
          Toggle cars
        </button>

        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          {cars}
        </div>

        {/* {this.state.showCars
            ? this.state.cars.map((car, index) => {
                return (
                  <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeTitle={() => this.changeTitleHandler(car.name)}
                  />
                );
              })
            : null} */}

        {/* <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        /> */}
      </div>
    );

    /* React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "Hello World!")
  ); */
  }
}

export default App;
