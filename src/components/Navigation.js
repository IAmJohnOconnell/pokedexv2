import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
text-decoration: none;
list-style: none;
text-transform: uppercase;
padding: 1rem;
`
const StyledLink = styled(Link)`
	color: yellow;
	text-decoration: none;

	:hover {
		color: red
	}
`

const Navigation = () => {
	return (
		<Nav>
			<li>
				<StyledLink to={"/"}>PokeDex</StyledLink>
			</li>
			<li>
				<StyledLink to={"/about"}>About</StyledLink>
			</li>
			<li>
			</li>
		</Nav>
	)
}

export default Navigation