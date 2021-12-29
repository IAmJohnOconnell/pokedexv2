import React from "react"
import Card from "./styles/PokemonCard.module.css"
import { Link } from "react-router-dom"

const PokemonCard = ({ pokemon }) => {
	return (
		<div className={`${Card.card} ${Card[pokemon.typeClass]}`}>
			<Link to={`/pokemon/${pokemon.id}`}>
				<div>
					<div className={Card.header}>
						<span className={Card.id}>{pokemon.id}</span>
						<h2 className={Card.pokemonName}>{pokemon.name}</h2>
					</div>
					<div>
						<img src={pokemon.image} alt='' />
					</div>
				</div>
			</Link>
		</div>
	)
}

export default PokemonCard
