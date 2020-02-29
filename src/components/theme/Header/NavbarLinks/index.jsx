import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import { Link } from 'gatsby'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">Sobre</AnchorLink>
		<Link to="/blog">Blog</Link>
		<AnchorLink href="#projects">Projetos</AnchorLink>
		<AnchorLink href="#contact">Contato</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
