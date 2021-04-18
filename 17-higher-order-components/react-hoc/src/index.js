import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const starWarsChars = [
  { name: "Darth Vader", side: "dark" },
  { name: "Luke Skywalker", side: "light" },
  { name: "Palpatine", side: "dark" },
  { name: "Obi-Wan Kenobi", side: "light" },
];

const App = ({ list }) => (
  <ul>
    {list.map((char, index) => {
      return (
        <li key={char.name + index}>
          <strong>{char.name}</strong> - {char.side}
        </li>
      );
    })}
  </ul>
);

const withFilteredProps = (Component) => ({ list, side }) => {
  const filteredList = list.filter((char) => char.side === side);
  return <Component list={filteredList} />;
};

const FilteredList = withFilteredProps(App);

ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={starWarsChars} side="light" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
