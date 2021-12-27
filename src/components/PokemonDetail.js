import React, { useState, useEffect } from "react";
import Card from "./PokemonCard.module.css";
import grass from "../assets/grassEnergy.png"
import fire from "../assets/fireEnergy.png"
import water from "../assets/waterEnergy.png"
import electric from "../assets/electricEnergy.png"
import dragon from "../assets/dragonEnergy.png"
import colorless from "../assets/colorlessEnergy.png"
import dark from "../assets/darkEnergy.png"
import fighting from "../assets/fightingEnergy.png"
import psychic from "../assets/psychicEnergy.png"
import steel from "../assets/steelEnergy.png"

const imageMap = {
  grass: grass,
  bug: grass,
  fire: fire,
  water: water,
  electric: electric,
  dragon: dragon,
  colorless: colorless,
  normal: colorless,
  fairy: colorless,
  dark: dark,
  fighting: fighting,
  ground: fighting,
  rock: fighting,
  psychic: psychic,
  ghost: psychic,
  ice: psychic,
  poison: psychic,
  steel: steel
}

const PokemonDetail = ({ pokemon, isFlipped, setIsFlipped }) => {
  const [randomNum, setRandomNum] = useState(0);
  const [moves, setMoves] = useState([]);
  const parsedMoves = [];

  const parseFlavorText = async () => {
    await pokemon.flavorTextEntries.filter((entry) => {
      Object.keys(pokemon.flavorTextEntries).forEach((key) =>
        pokemon.flavorTextEntries[key] === undefined
          ? delete pokemon.flavorTextEntries[key]
          : {}
      );
    });
    let random = Math.floor(Math.random() * 10);
    setRandomNum(random);
  };

  const parseMoves = async () => {
    pokemon.moves.forEach((move) => {
      parsedMoves.push(move.move.name);
      setMoves(parsedMoves);
    });
  };

  useEffect(() => {
    parseFlavorText();
    parseMoves();
  }, [isFlipped]);

  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      <div className={Card.header}>
        <div className={Card.headerLeft}>
          <sub className={Card.stage}>Basic Pokemon</sub>
          <h1 className={Card.name}>{pokemon.name}</h1>
        </div>
        <div className={Card.hpEnergy}>
          <h2 className={Card.hp}>{pokemon.stats[0].baseStat}</h2>
          {pokemon.energyType && <img src={imageMap[pokemon.energyType]} className={Card.energy} alt="" /> }
        </div>
      </div>
      <div className={Card.borderGradient}>
        <img src={pokemon.image} alt="" />
      </div>
      <div className={Card.banner}>
        <p>
          {pokemon.type} Pokemon. Height: {pokemon.height}, Weight:{" "}
          {pokemon.weight}
        </p>
      </div>
      <div>
        <p className={Card.label}>Abilities</p>
      </div>
      <div>
        <p>{pokemon.abilities}</p>
      </div>
      <div>
        <p className={Card.label}>Stats</p>
      </div>
      <div className={Card.stats}>
        {pokemon.stats.map((stat) => {
          return (
            <div className="stat" key={stat.statName}>
              <p className={Card.statName}>{stat.statName}:</p>
              <p>{stat.baseStat}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p className={Card.label}>Moves</p>
      </div>
      <div className={Card.moves}>
        {moves &&
          moves.map((move) => {
            return (
              <div className="move" key={move.name}>
                <p className={Card.moveName}>{move}</p>
              </div>
            );
          })}
      </div>
      <div className={Card.textSummary}>
        <p className={`${Card.borderGradient} ${Card.flavorText}`}>
          {pokemon.flavorTextEntries[randomNum] &&
            pokemon.flavorTextEntries[randomNum].flavor_text}
        </p>
      </div>
      <div className={Card.catalogNumber}>
        <p>{pokemon.id}/151</p>
      </div>
    </div>
  );
};

export default PokemonDetail;

// const formattedPokemon = {
// 	id: pokemon.id,
// 	name: pokemon.name,
// 	image: `${pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default}`,
// 	type: pokemonType,
// 	typeClass: pokemonTypeClass,
// 	abilities: pokemonAbilities,
// 	stats: pokemonStats,
// 	moves,
// 	sprites,
// 	items: pokemon.held_items,
// 	height: pokemon.height,
// 	weight: pokemon.weight,
//   };
