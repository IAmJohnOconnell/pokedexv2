import canvasBG from "../assets/canvas.jpg"
import canvasDarkBG from "../assets/canvasDark.jpg"
import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    background: `URL(${canvasBG})`,
    color: "white"
}

export const darkTheme = {
    background: `URL(${canvasDarkBG})`,
    color: "black"
}

export const GlobalStyle = createGlobalStyle`
html {
  background:${props => props.theme.background};
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex
  justify-content: center
  color: ${props => props.theme.color}

  & a {
    color: ${props => props.theme.color}
  }

  & a:visited {
    color: ${props => props.theme.color}
  }
  
  & a:link {
    color: ${props => props.theme.color}
  }
}

body {
  color: ${props => props.theme.color};
}
`