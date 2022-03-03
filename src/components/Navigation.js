import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Switch from "./Switch"

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	margin: 0 auto;
	list-style: none;
	text-transform: uppercase;
	gap: 2rem;
	padding: 1rem;

	li :nth-child() {
		/* margin-left: auto; */
	}
`
const StyledLink = styled(Link)`
	color: ${(props) => props.theme.color};
	text-decoration: none;
	font-weight: bold;

	:hover {
		color: #ffe202;
	}
`

const Navigation = ({ themeToggler }) => {
	return (
		<Nav>
			<li>
				<StyledLink to={"/"}>Home</StyledLink>
			</li>
			<li>
				<Switch themeToggler={themeToggler} />
			</li>
		</Nav>
	)
}

export default Navigation
