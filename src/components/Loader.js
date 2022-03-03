import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
	display: flex;
	place-content: center;
	place-items: center;
	margin: 25vh auto;
	width: 50px;
	height: 50px;
	border: 3px solid rgba(0, 0, 0, 0.3);
	border-radius: 50%;
	border-top-color: #000;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
const Loader = () => {
	return <StyledLoader></StyledLoader>;
};

export default Loader;
