import React, { useState, useEffect } from "react";
import Card from "./PokemonCard.module.css";
import grassEnergy from "../assets/grassEnergy.png"
import fireEnergy from "../assets/fireEnergy.png"
import waterEnergy from "../assets/waterEnergy.png"
import electricEnergy from "../assets/electricEnergy.png"
import dragonEnergy from "../assets/dragonEnergy.png"
import colorlessEnergy from "../assets/colorlessEnergy.png"
import darkEnergy from "../assets/darkEnergy.png"
import fightingEnergy from "../assets/fightingEnergy.png"
import psychicEnergy from "../assets/psychicEnergy.png"
import steelEnergy from "../assets/steelEnergy.png"

const PokemonCardInfo = ({ pokemon, isFlipped, setIsFlipped }) => {
  const [randomNum, setRandomNum] = useState(0);
  const [moves, setMoves] = useState([]);
  const [energy,setEnergy] = useState();
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
          <h2 className={Card.hp}>120 HP</h2>
          <img src={grassEnergy} className={Card.energy} alt="" />
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

export default PokemonCardInfo;

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
