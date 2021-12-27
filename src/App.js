import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import { Routes, Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";

export default function App() {
  const [pokemonData, setPokemonData] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

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
            return flavorText;
          }
        }
      );

      const pokemonType = pokemon.types
        .map((type) => type.type.name)
        .join(", ");

      const pokemonEnergyType = pokemon.types[0].type.name;
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
        url: `/pokemon/${id}`,
        image: `${pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default}`,
        type: pokemonType,
        typeClass: pokemonTypeClass,
        energyType: pokemonEnergyType,
        energyClass: `../assets/${pokemonEnergyType}Energy.png`,
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

  const filterPokemon = async (input) => {
    try {
      let filteredArr = await pokemonData.filter((pokemon) => {
        return pokemon.name.includes(input);
      });
      setFilteredPokemon(filteredArr);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.App}>
      <Hero />
      <SearchForm filterPokemon={filterPokemon} />
      <Grid pokemonData={pokemonData} filteredPokemon={filteredPokemon} />
      {/* <Routes>
        <Route
          path="/"
          element={
            <Grid pokemonData={pokemonData} filteredPokemon={filteredPokemon} />
          }
        />
        <Route
          path="search"
          element={<SearchForm filterPokemon={filterPokemon} />}
        />
        <Route
          path="pokemon"
          element={
            <Grid pokemonData={pokemonData} filteredPokemon={filteredPokemon} />
          }
        >
          <Route path="pokemon/:pokemonId" element={PokemonCard} >

          </Route>
        </Route>
      </Routes> */}
    </div>
  );
}
