import React, { useState } from "react";
import Card from "./PokemonCard.module.css";
import PokemonCardInfo from "./PokemonCardInfo";

const PokemonCard = ({ pokemon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${Card.card} ${Card[pokemon.typeClass]}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {!isFlipped && (
        <div>
          <div className={Card.header}>
            <span className={Card.id}>{pokemon.id}</span>
            <h2 className={Card.pokemonName}>{pokemon.name}</h2>
          </div>
          {/* <p>{pokemon.type}</p> */}
          <div>
            <img src={pokemon.image} alt="" />
          </div>
          {/* <div>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div> */}
        </div>
      )}
      {isFlipped ? (
        <PokemonCardInfo
          pokemon={pokemon}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          onClick={() => setIsFlipped(!isFlipped)}
        />
      ) : null}
    </div>
  );
};

export default PokemonCard;
