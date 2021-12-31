import React from "react"
import styled from "styled-components"

const StyledSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;

	& input {
		opacity: 0;
		width: 0;
		height: 0;
	}
`

const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 34px;
	transition: 0.4s;

	&:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		border-radius: 50%;
		transition: 0.4s;
	}
`
const Box = styled.input`
	:checked + ${Slider}:before {
		transform: translateX(26px);
		transition: 0.4s;
		background-color: darkgrey;
		border: 1px solid white;
	}

	:checked + ${Slider} {
		background-color: white;
		border: 1px solid darkgrey;
		transition: 0.4s;
	}
`

const Switch = ({ onClick, themeToggler }) => {
	return (
		<StyledSwitch>
			<Box type='checkbox' onClick={themeToggler} />
			<Slider />
		</StyledSwitch>
	)
}

export default Switch
