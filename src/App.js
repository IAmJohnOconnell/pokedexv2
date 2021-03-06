import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PokeDex from "./pages/PokeDex"
import PokemonInfo from "./pages/PokemonInfo"
import Navigation from "./components/Navigation"
import SearchForm from "./components/SearchForm"
import Hero from "./components/Hero"
import axios from "axios"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./components/Themes"
import { GlobalStyle } from "./components/Themes"
import Loader from "./components/Loader"

export default function App() {
	const [theme, setTheme] = useState("light")
	const [pokemonData, setPokemonData] = useState("")
	const [filteredPokemon, setFilteredPokemon] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light")
		console.log("clicked")
	}

	const getPokemon = async () => {
		const original = 151
		let pokemons = []

		for (let id = 1; id <= original; id++) {
			let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			let flavorTextResponse = await axios.get(
				`https://pokeapi.co/api/v2/pokemon-species/${id}`
			)
			let pokemon = response.data
			let pokemonSpecies = flavorTextResponse.data

			const pokemonFlavorText = pokemonSpecies.flavor_text_entries.map(
				(flavorText) => {
					if (flavorText.language.name === "en") {
						return flavorText
					}
					return flavorText
				}
			)

			const pokemonType = pokemon.types.map((type) => type.type.name).join(", ")

			const pokemonEnergyType = pokemon.types[0].type.name
			const pokemonTypeClass = pokemon.types
				.map((type) => type.type.name)
				.join("-")

			const pokemonAbilities = pokemon.abilities
				.map((ability) => ability.ability.name)
				.join(", ")

			const pokemonStats = pokemon.stats.map((data) => ({
				statName: data.stat.name,
				baseStat: data.base_stat,
			}))

			const moves = pokemon.moves.slice(0, 5)
			const spriteData = Object.entries(pokemon.sprites)
			const notNull = spriteData.filter(([key, value]) => value !== null)
			const sprites = Object.fromEntries(notNull)

			const formattedPokemon = {
				id: pokemon.id,
				name: pokemon.name,
				url: `/pokemon/${id}`,
				image: `${pokemon.sprites.other["dream_world"].front_default}`,
				imageAnimated: `${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}`,
				evolutionChain: pokemonSpecies.evolution_chain.url,
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
			}
			pokemons.push(formattedPokemon)
		}
		setPokemonData(pokemons)
		setIsLoading(false)
	}

	useEffect(() => {
		getPokemon()
	}, [])

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<div>
				<Router>
					<GlobalStyle />
					<Hero />
					{!isLoading ? (
						<>
							<Navigation themeToggler={themeToggler} />
							<SearchForm
								pokemonData={pokemonData}
								setPokemonData={setPokemonData}
								setFilteredPokemon={setFilteredPokemon}
								getPokemon={getPokemon}
							/>
							<Routes>
								<Route
									path='/'
									element={
										<PokeDex
											pokemonData={pokemonData}
											getPokemon={getPokemon}
											filteredPokemon={filteredPokemon}
										/>
									}
								/>

								<Route
									path='/pokemon/:id'
									element={<PokemonInfo pokemonData={pokemonData} />}
								/>
							</Routes>
						</>
					) : (
						<Loader />
					)}
				</Router>
			</div>
		</ThemeProvider>
	)
}
