import React from "react";
import "./Pokemon.css";

export default class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;

    return (
      <section className = 'pokemon'>
        <div>
          <p className = 'name'>Name: {name}</p>
          <p>Type: {type}</p>
          <p>
            Weight: {value} {measurementUnit}
          </p>
        </div>
        <img src={image} alt={name} />
      </section>
    );
  }
}