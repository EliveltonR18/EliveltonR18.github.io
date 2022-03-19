import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills1.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="A boy seeing a portfolio" />
      </Thumbnail>
      <Details>
        <h1>Skills</h1>
        <p>
          I have a good communication and soft skills. I always was recognized as a integration agent in teams by my leaders.
        </p>
        <div style={{ color: '#707070', display: 'flex' }}>
          <ul style={{ display: 'inline-block', paddingInlineEnd: '10px' }}>
            <h4>Management</h4>
            <li>Scrum</li>
            <li>Kanbam</li>
            <li>Jira</li>
          </ul>
          <ul style={{ display: 'inline-block', paddingInlineEnd: '10px' }}>
            <h4>Front-End</h4>
            <li>React</li>
            <li>React Testing Library</li>
            <li>React Native</li>
            <li>SASS</li>
            <li>Cypress</li>
            <li>Jest</li>
          </ul>
          <ul style={{ display: 'inline-block', paddingInlineEnd: '10px' }}>
            <h4>Back-End</h4>
            <li>SQL</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Knex.js</li>
          </ul>
          <ul style={{ display: 'inline-block' }}>
            <h4>Others</h4>
            <li>Amazon Web Services</li>
            <li>Git e GitFlow</li>
            <li>Linux</li>
          </ul>
        </div>
        <div style={{ paddingTop: '15px' }}>
          <Button as={AnchorLink} href="#contact">
            Contato
          </Button>
        </div>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
