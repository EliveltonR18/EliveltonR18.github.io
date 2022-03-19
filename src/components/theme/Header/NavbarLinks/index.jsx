import React from 'react'
import { Wrapper } from './styles'
import { Link } from 'gatsby'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<Link to="/#about">About</Link>
		{/* <Link to="/blog">Blog</Link> */}
		<Link to="/#projects">Projects</Link>
		<Link to="/#contact">Contact</Link>
	</Wrapper>
)

export default NavbarLinks
