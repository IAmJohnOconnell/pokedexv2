import React from "react"
import styled from "styled-components"

const StyledSwitch = styled.label`
	position: relative;
	display: flex;
	width: 30px;
	height: 17px;
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
	background-color: #bbb;
	transition: 0.4s;
	border-radius: 34px;
	transition: 0.4s;

	&:before {
		position: absolute;
		content: "";
		height: 13px;
		width: 13px;
		left: 2px;
		bottom: 2px;
		background-color: #fefefe;
		border-radius: 50%;
		transition: 0.4s;
	}
`
const Box = styled.input`
	:checked + ${Slider}:before {
		transform: translateX(13px);
		transition: 0.4s;
		background-color: #313131;
	}

	:checked + ${Slider} {
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
