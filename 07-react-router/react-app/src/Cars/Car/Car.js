import React from "react";
import styles from "./Car.module.scss";
import { withRouter } from "react-router-dom";

const Car = (props) => {
  return (
    <div
      className={styles.Car}
      onClick={() => props.history.push("/cars/" + props.name.toLowerCase())}
    >
      <h3>Сar name: {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
    </div>
  );
};

export default withRouter(Car);
