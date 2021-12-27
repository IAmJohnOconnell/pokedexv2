import React, { useState } from "react";
import GridStyles from "./Grid.module.css";
import PokemonCard from "./PokemonCard";

const Grid = ({ pokemonData, filteredPokemon }) => {


  return (
    <>
      <div className={GridStyles.container}>
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
    </>
  );
};

export default Grid;
