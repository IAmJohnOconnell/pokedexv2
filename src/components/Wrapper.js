import React from 'react'
import styled from "styled-components"

const Container = styled.div`
border: 3px solid #222;
border-radius: 1rem;
padding: 1rem;
`

const Wrapper = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Wrapper
