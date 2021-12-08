import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Container from "./components/Container";
import Hero from "./components/Hero";

export default function App() {
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const origional = 151;
    let pokemons = [];

    for (let id = 1; id <= origional; id++) {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let flavorTextResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      let pokemon = response.data;
      let pokemonSpecies = flavorTextResponse.data;

      const pokemonFlavorText = pokemonSpecies.flavor_text_entries.map(
        (flavorText) => {
          if (flavorText.language.name === "en") {
            return flavorText
          }
        }
      );

      const pokemonType = pokemon.types
        .map((type) => type.type.name)
        .join(", ");
      const pokemonTypeClass = pokemon.types
        .map((type) => type.type.name)
        .join("-");
      const pokemonAbilities = pokemon.abilities
        .map((ability) => ability.ability.name)
        .join(", ");
      const pokemonStats = pokemon.stats.map((data) => ({
        statName: data.stat.name,
        baseStat: data.base_stat,
      }));
      const moves = pokemon.moves.slice(0, 5);
      const spriteData = Object.entries(pokemon.sprites);
      const notNull = spriteData.filter(([key, value]) => value !== null);
      const sprites = Object.fromEntries(notNull);

      const formattedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default}`,
        type: pokemonType,
        typeClass: pokemonTypeClass,
        abilities: pokemonAbilities,
        flavorTextEntries: pokemonFlavorText,
        stats: pokemonStats,
        moves: moves,
        sprites: sprites,
        items: pokemon.held_items,
        height: pokemon.height,
        weight: pokemon.weight,
      };
      pokemons.push(formattedPokemon);
    }
    setPokemonData(pokemons);
  };

  return (
    <div className={styles.App}>
      <Hero />
      <Container pokemonData={pokemonData} />
    </div>
  );
}
