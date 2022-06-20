import React from "react";
import pokemons from "../services/mock";
import Pokemon from "../components/Pokemon";
import "./Pokedex.css";

export default class Pokedex extends React.Component {
  render() {
    return(
      <>
        <h1>Pokedex</h1>
        <section className="pokedex">
          {pokemons.map((pokemon, index) =>
            <Pokemon key = {index} pokemon = {pokemon}/>)}
        </section>
      </>
    );
  }
}