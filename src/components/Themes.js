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
}
`