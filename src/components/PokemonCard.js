import React from "react"
import Types from "./styles/Types.module.css"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div`
	text-align: center;
	border-radius: 10px;
	cursor: pointer;
	box-shadow: 0 0px 20px 2px rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
	padding: 0.5em;
	font-family: monospace;
	height: 400px & header {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
	}

	& span {
		font-weight: bold;
		font-size: 1rem;
		color: white;
		border-radius: 2rem;
		padding: 0.4em;
	}

	& div {
		margin: 0 auto;
	}

	& img {
		height:128px;
		width:128px;
	}
`

const Name = styled.h2`
	font-family: sans-serif;
`

const StyledLink = styled(Link)`
	link-style: none;
	text-decoration: none;
`

const PokemonCard = ({ pokemon }) => {
	return (
		<StyledLink to={`/pokemon/${pokemon.id}`}>
			<Card className={Types[pokemon.energyType]}>
				<div>
					<header>
						<span>#{pokemon.id}</span>
						<Name>{pokemon.name}</Name>
					</header>
					<div>
						<img src={pokemon.image} alt='' />
					</div>
				</div>
			</Card>
		</StyledLink>
	)
}

export default PokemonCard
