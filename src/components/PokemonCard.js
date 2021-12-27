import React, { useState } from "react";
import Card from "./PokemonCard.module.css";
import PokemonDetail from "./PokemonDetail";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipAndShow = () => {
    console.log(pokemon.url);
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${Card.card} ${Card[pokemon.typeClass]}`}
      onClick={flipAndShow}
    >
      {!isFlipped && (
        <div>
          <Link to={`${pokemon.url}`} key={pokemon.id}>
            <div className={Card.header}>
              <span className={Card.id}>{pokemon.id}</span>
              <h2 className={Card.pokemonName}>{pokemon.name}</h2>
            </div>
            <div>
              <img src={pokemon.image} alt="" />
            </div>
          </Link>
        </div>
      )}
      {isFlipped ? (
        <PokemonDetail
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
