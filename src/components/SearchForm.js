import React, { useState } from "react"
import { Link } from "react-router-dom"
import Search from "./styles/SearchForm.module.css"
import styled from "styled-components"

const SearchForm = ({ filterPokemon }) => {
	const StyledLink = styled(Link)`
		color: white;
		text-decoration: none;
	`

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
		<form className={Search.form}>
			<input
				type='text'
				placeholder='Search...'
				value={input}
				onChange={onInputChange}
			/>
			<button className={Search.btn} type='submit' onClick={submitForm}>
				Search
			</button>
			<button
				className={Search.btnHome}
				type='button'
				onClick={resetForm}>
				<StyledLink to='/'>Reset</StyledLink>
			</button>
		</form>
	)
}

export default SearchForm
