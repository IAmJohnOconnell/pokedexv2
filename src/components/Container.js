import React, { useState } from "react";
import ContainerStyles from "./Container.module.css";
import PokemonCard from "./PokemonCard";
import SearchForm from "./SearchForm";

const Container = ({ pokemonData }) => {
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const filterPokemon = async (input) => {
    try {
      console.log(input);
      let filteredArr = await pokemonData.filter((pokemon) => {
        return pokemon.name.includes(input);
      });
      setFilteredPokemon(filteredArr);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className={ContainerStyles.form}>
        <SearchForm filterPokemon={filterPokemon} />
      </div>
      <div className={ContainerStyles.container}>
        {pokemonData && filteredPokemon.length === 0
          ? pokemonData.map((poke) => {
              return <PokemonCard key={poke.name} pokemon={poke} />;
            })
          : null}

        {filteredPokemon && filteredPokemon.length > 0
          ? filteredPokemon.map((poke) => {
              return <PokemonCard key={poke.name} pokemon={poke} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Container;
