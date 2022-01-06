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
	letter-spacing: 1px;
	color: ${props => props.theme.color};

	&:hover {
		box-shadow: 0px 3px 3px black;
		background-color: #1b82b1;
	}

`

const ResetButton = styled(SearchButton)`
	background-color: #4dad5b;
	transition: all ease-in-out 0.1s;


	&:hover {
		background-color: #369143;
	}
`

const SearchForm = ({ filterPokemon }) => {
	const [input, setInput] = useState("")

	const onInputChange = e => {
		setInput(e.target.value.toLowerCase())
	}

	const submitForm = e => {
		if (input === "") {
			e.preventDefault()
			alert("Whoops! Forgot you forgot something!")
		} else {
			e.preventDefault()
			filterPokemon(input)
			setInput("")
		}
	}

	const resetForm = e => {
		e.preventDefault()
		filterPokemon(input)
		setInput("")
	}

	return (
		<StyledForm>
			<SearchField
				type='text'
				placeholder='Search...'
				value={input}
				onChange={onInputChange}
			/>
			<SearchButton type='submit' onClick={submitForm}>
				Search
			</SearchButton>
			<ResetButton type='button' onClick={resetForm}>
				<StyledLink to='/'>Reset</StyledLink>
			</ResetButton>
		</StyledForm>
	)
}

export default SearchForm
