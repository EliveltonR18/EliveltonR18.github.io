import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Habilidades</h1>
        <p>
          Tenho um mindset de trabalho em equipe, costumo sempre me posicionar tendo em vista o crescimento da equipe e da solução.
        </p>
        <p>Algumas das minhas habilidades: </p>
        
        <div style={{color: '#707070'}}>
          <ul style={{display: 'inline-block', paddingInlineEnd: '15px'}}>
            <h4>Management</h4>
            <li>Filosofia Ágil</li>
            <li>Scrum</li>
            <li>Kanbam</li>
            <li>Jira</li>
          </ul>
          <ul style={{display: 'inline-block', paddingInlineEnd: '15px'}}>
            <h4>Front-End</h4>
            <li>JavaScript</li>
            <li>HTLM</li>
            <li>SASS</li>
            <li>React.js</li>
          </ul>
          <ul style={{display: 'inline-block', paddingInlineEnd: '15px'}}>
            <h4>Back-End</h4>
            <li>SQL</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Knex.js</li>
          </ul>
          <ul style={{display: 'inline-block'}}>
            <h4>Outras</h4>
            <li>Amazon Web Services</li>
            <li>Git e GitFlow</li>
            <li>Heroku</li>
            <li>Linux</li>
          </ul>
        </div>
        <div style={{paddingTop: '15px'}}>
          <Button as={AnchorLink} href="#contact">
            Contate-me
          </Button>
        </div>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
