import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
`

const SearchField = styled.input`
	outline: none;
	border-radius: 5px;
	border: 3px solid #414141;
	color: #313131;
	margin: 0;
	padding: 0.5em 0;
	text-indent: 0.5em;
	font-weight: bold;

	&:focus {
		border: 3px solid #818181;
	}
`

const SearchButton = styled.button`
	padding: 0.5em;
	margin: 0.2em;
	background-color: #30a7d7;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	color: ${(props) => props.theme.color};
	transition: all ease-in-out 0.1s;

	&:hover {
		box-shadow: 1px 2px 6px black;
	}
`

const ResetButton = styled(SearchButton)`
	background-color: #4dad5b;
`

const SearchForm = ({ pokemonData, setFilteredPokemon }) => {
	const [input, setInput] = useState("")

	const filterPokemon = async (e) => {
		if (e.target.value !== "") {
			setInput(e.target.value.toLowerCase())
			let filteredArr = await pokemonData.filter((pokemon) =>
				pokemon.name.includes(input)
			)
			setFilteredPokemon(filteredArr)
		} else {
			setFilteredPokemon("")
			setInput("")
		}
	}

	const resetForm = (e) => {
		e.preventDefault()
		setFilteredPokemon(pokemonData)
		setInput("")
	}

	return (
		<StyledForm>
			<SearchField
				type='text'
				placeholder='Search...'
				value={input}
				onChange={filterPokemon}
			/>
			<ResetButton type='button' onClick={resetForm}>
				<StyledLink to='/'>Reset</StyledLink>
			</ResetButton>
		</StyledForm>
	)
}

export default SearchForm
