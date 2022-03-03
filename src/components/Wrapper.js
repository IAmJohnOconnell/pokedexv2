import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	display: flex;
	place-content: center;
	align-items: center;
	/* margin-right: auto; */
`;

const Wrapper = (props) => {
	return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Wrapper;
