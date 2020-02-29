import React from 'react'
import { Wrapper } from './styles'
import { Link } from 'gatsby'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<Link to="/#about">Sobre</Link>
		<Link to="/blog">Blog</Link>
		<Link to="/#projects">Projetos</Link>
		<Link to="/#contact">Contato</Link>
	</Wrapper>
)

export default NavbarLinks
