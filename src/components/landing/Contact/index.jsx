import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/contact1.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Contato</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="Elivelton, um software engineer" />
    </Thumbnail>
  </Wrapper>
)
