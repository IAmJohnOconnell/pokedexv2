import React, { useEffect } from "react"
import PokemonCard from "../components/PokemonCard"
import styled from "styled-components"

const  GridContainer = styled.div`
padding: 2rem;
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-flow: row;
gap: .8em;
`

const PokeDex = ({ getPokemon, pokemonData, filteredPokemon }) => {

	useEffect(() => {
		getPokemon()
	}, [])



	return (
		<>

			<GridContainer >
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
			</GridContainer>
		</>
	)
}

export default PokeDex
