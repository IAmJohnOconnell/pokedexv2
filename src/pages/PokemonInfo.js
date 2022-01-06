import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Types from "../components/styles/Types.module.css"
//energies
import grass from "../assets/grassEnergy.png"
import fire from "../assets/fireEnergy.png"
import water from "../assets/waterEnergy.png"
import electric from "../assets/electricEnergy.png"
import dragon from "../assets/dragonEnergy.png"
import colorless from "../assets/colorlessEnergy.png"
import dark from "../assets/darkEnergy.png"
import fighting from "../assets/fightingEnergy.png"
import psychic from "../assets/psychicEnergy.png"
import steel from "../assets/steelEnergy.png"
//

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`
const Card = styled.div`
	text-align: center;
	border: 1em solid #f3d34b;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 0 0px 40px 2px rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	text-transform: capitalize;
	justify-content: center;
	align-items: center;
	margin: 2em auto;
	padding: 0.5em;
	max-width: 50vw;
`
const CardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	max-width: 90%;
	margin: 0 auto;
	margin-top: 0.5em;
`
const CardHeaderLeft = styled.div`
	display: flex;
	flex-direction: column;
`
const Stage = styled.sub`
	font-weight: bold;
	margin-right: auto;
`
const Name = styled.h1`
	margin: 0;
`
const HPEnergy = styled.div`
	display: flex;
	flex-direction: row;
	/* justify-content: center; */
	margin-left: auto;
	align-items: center;
	gap: 0.5em;
	padding: 0;
`
const HP = styled.h2`
	color: #ab2a31;
	font-weight: bold;
	margin: 0;
`
const Energy = styled.img`
	max-height: 20px;
	max-width: 20px;
`
const Image = styled.img`
	max-width: auto;
`

const BorderGradientContainer = styled.div`
	border: 4px solid;
	max-width: 90%;
	margin: 0 auto;
	border-image-slice: 1;
	border-image-source: linear-gradient(to left, #7f6720, #d9c877);
	margin-bottom: 0.4em;
`
const TextSummaryContainer = styled(BorderGradientContainer)`
	padding: 1em;
`

const Banner = styled.div`
	display: flex;
	flex-direction: row;
	background: rgb(127, 103, 32);
	background: linear-gradient(
		133deg,
		#7f6720 0%,
		#d9c877 50%,
		rgba(127, 103, 32, 1) 100%
	);
	font-size: 0.6em;
	letter-spacing: 1px;
	border-radius: 0.4em;
	height: 2em;
	align-items: center;
	justify-content: center;
	max-width: 90%;
	margin: 0 auto;
`
const Label = styled.p`
	display: flex;
	font-weight: bold;
	border-bottom: 1px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(to left, #7f6720, #d9c877);
	padding: 0.5em 0;
`
const Stats = styled.div`
	display: grid;
	font-size: 1.1em;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	justify-content: space-between;
	align-content: center;
`
const Moves = Stats

const StatName = styled.p`
	font-weight: bold;
`
const MoveName = styled.p`
	font-weight: bold;
`
const TextSummary = styled.div`
	background: none;
	text-decoration: inherit;
	font-size: 1rem;
`
const CatalogNumber = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 0.8em;
	font-weight: bold;

	& p {
		margin: 0;
		padding-top: 1em;
	}
`

const PokemonInfo = ({ pokemonData }) => {
	const [randomNum, setRandomNum] = useState(0)
	const [moves, setMoves] = useState([])
	const parsedMoves = []
	let { id } = useParams()
	id -= 1
	let pokemon = pokemonData[id]
	const imageMap = {
		grass: grass,
		bug: grass,
		fire: fire,
		water: water,
		electric: electric,
		dragon: dragon,
		colorless: colorless,
		normal: colorless,
		fairy: colorless,
		dark: dark,
		fighting: fighting,
		ground: fighting,
		rock: fighting,
		psychic: psychic,
		ghost: psychic,
		ice: psychic,
		poison: psychic,
		steel: steel,
	}

	const parseFlavorText = async () => {
		try {
			await pokemon.flavorTextEntries.filter(entry => {
				return Object.keys(pokemon.flavorTextEntries).forEach(key =>
					pokemon.flavorTextEntries[key] === undefined
						? delete pokemon.flavorTextEntries[key]
						: {}
				)
			})
			let random = Math.floor(Math.random() * 10)
			setRandomNum(random)
		} catch (e) {
			console.log(e)
		}
	}

	const parseMoves = async () => {
		try {
			pokemon.moves.forEach(move => {
				parsedMoves.push(move.move.name)
				setMoves(parsedMoves)
			})
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		parseFlavorText()
		parseMoves()
	}, [])

	return (
		<>
			{pokemon && (
				<Card className={Types[pokemon.typeClass]}>
					<StyledLink to={"/"}>
						<CardHeader>
							<CardHeaderLeft>
								<Stage>Basic Pokemon</Stage>
								<Name>{pokemon.name}</Name>
								{/* <Name>{pokemon.id}</Name> */}
							</CardHeaderLeft>
							<HPEnergy>
								<HP>{pokemon.stats[0].baseStat}</HP>
								{pokemon.energyType && (
									<Energy
										src={imageMap[pokemon.energyType]}
										alt=''
									/>
								)}
							</HPEnergy>
						</CardHeader>
						<BorderGradientContainer>
							<Image src={pokemon.image} alt='' />
						</BorderGradientContainer>
						<Banner>
							<p>
								{pokemon.type} Pokemon. Height: {pokemon.height}
								, Weight: {pokemon.weight}
							</p>
						</Banner>
						<div>
							<Label>Abilities</Label>
						</div>
						<div>
							<p>{pokemon.abilities}</p>
						</div>
						<div>
							<Label>Stats</Label>
						</div>
						<Stats>
							{pokemon.stats.map(stat => {
								return (
									<div key={stat.statName}>
										<StatName>{stat.statName}:</StatName>
										<p>{stat.baseStat}</p>
									</div>
								)
							})}
						</Stats>
						<div>
							<Label>Moves</Label>
						</div>
						<Moves>
							{moves &&
								moves.map(move => {
									return (
										<div key={move.name}>
											<MoveName>{move}</MoveName>
										</div>
									)
								})}
						</Moves>
						<TextSummary>
							<TextSummaryContainer>
								{pokemon.flavorTextEntries[randomNum] &&
									pokemon.flavorTextEntries[randomNum]
										.flavor_text}
							</TextSummaryContainer>
						</TextSummary>
						<CatalogNumber>
							<p>{pokemon.id}/151</p>
						</CatalogNumber>
					</StyledLink>
				</Card>
			)}
		</>
	)
}

export default PokemonInfo
