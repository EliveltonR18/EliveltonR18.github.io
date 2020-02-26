import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">Sobre</AnchorLink>
		<AnchorLink href="#projects">Projetos</AnchorLink>
		<AnchorLink href="#contact">Contato</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
