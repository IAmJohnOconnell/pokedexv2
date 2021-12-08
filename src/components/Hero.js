import React from 'react'
import titleImage from "../assets/titleImage.png"
import heroStyle from "./Hero.module.css"


const Hero = () => {
	return (
		<header className={heroStyle.heroImage}>
			<img src={titleImage} alt="Pokedex"></img>
		</header>
	)
}

export default Hero
