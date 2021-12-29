import React, { useState, useEffect } from "react"
import SearchForm from "../components/SearchForm"
import GridStyles from "../components/styles/Grid.module.css"
import PokemonCard from "../components/PokemonCard"

const PokeDex = ({ getPokemon, pokemonData }) => {
	const [filteredPokemon, setFilteredPokemon] = useState([])

	useEffect(() => {
		getPokemon()
	}, [])

	const filterPokemon = async input => {
		try {
			let filteredArr = await pokemonData.filter(pokemon => {
				return pokemon.name.includes(input)
			})
			setFilteredPokemon(filteredArr)
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<>
			<h1>This is a PokeDex Page</h1>

			<SearchForm filterPokemon={filterPokemon} />

			<div className={GridStyles.container}>
				{pokemonData && filteredPokemon.length === 0
					? pokemonData.map(poke => {
							return (
								<PokemonCard key={poke.name} pokemon={poke} />
							)
					  })
					: null}

				{filteredPokemon && filteredPokemon.length > 0
					? filteredPokemon.map(poke => {
							return (
								<PokemonCard key={poke.name} pokemon={poke} />
							)
					  })
					: null}
			</div>
		</>
	)
}

export default PokeDex
