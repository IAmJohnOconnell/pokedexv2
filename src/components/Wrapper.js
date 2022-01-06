import React from 'react'
import styled from "styled-components"

const StyledWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 5rem;
`

const Wrapper = (props) => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}

export default Wrapper
