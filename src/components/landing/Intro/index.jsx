import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev2.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail, Links } from './styles'
import social from './social.json';

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hello!</h1>
				<h4>I'm Elivelton, a Software Engineer</h4>
				<Links>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "200px" }}>
					{social.map(({ id, name, link, icon, style }) => (
						<a
							style={{display: "flex", justifyContent: "center", alignItems: 'baseline', paddingRight: "20px"}}
							key={id}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`follow me on ${name}`}
						>
							<img width="30" style={style} src={icon} alt={name} />
						</a>
					))}
				</div>
				</Links>
				{/* <Button as={AnchorLink} href="#contact">
					Contato
				</Button> */}
			</Details>
			<Thumbnail>
				<img src={dev} alt="A boy on a computer" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
