import React from "react"
import Types from "./styles/Types.module.css"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div`
	text-align: center;
	border-radius: 10px;
	cursor: pointer;
	box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
	padding: 0.5em;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.2);
		transform: scale3d(1.02, 1.02, 1.02);
		transform: translateY(-2%);
		transition: all 0.2s ease-in-out;



		& img {
			transform:scale3d(1.2,1.2,1.2);
			transition: all 0.25s ease-in-out;

		}
	}

	& header {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
	}

	& span {
		font-weight: bold;
		font-size: 1rem;
		border-radius: 2rem;
		padding: 0.4em;
		transition: all 0.2s ease-in-out;
	}

	& div {
		margin: 0 auto;
	}

	& img {
		height: 128px;
		width: 128px;
		padding:1rem;
		transition: all 0.2s ease-in-out;

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
