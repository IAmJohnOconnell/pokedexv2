import canvasBG from "../assets/bodyDark_bg.png"
import canvasDarkBG from "../assets/body_bg.png"
import { createGlobalStyle } from "styled-components"

export const lightTheme = {
	background: `URL(${canvasBG})`,
	color: "#313131",
}

export const darkTheme = {
	background: `URL(${canvasDarkBG})`,
	color: "#ffffff",
}

export const GlobalStyle = createGlobalStyle`
html {
  background:${props => props.theme.background};
  background-size: auto;
  color: ${props => props.theme.color};
  font-family: 'Roboto', sans-serif;
  transition: all ease 0.4s;


  & a {
    // color: ${props => props.theme.color};
    text-decoration:none;
    font-family: 'Raleway', sans-serif;
  }

  & a:visited {
    color: ${props => props.theme.color};
  }
  
  & a:link {
    color: ${props => props.theme.color};
  }

  & span {
    color: ${props => props.theme.color};
  }
}

body {
  color: ${props => props.theme.color};
}
`
