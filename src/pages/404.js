import React from 'react';
import { Layout, SEO } from 'components/common';
import { Thumbnail, Text } from './styles';
import { Header } from '../components/theme';
import dev from 'assets/illustrations/not_found.svg'

export default () => (
  <Layout>
    <Header />
    <SEO title="404: Not found" location="/404" />
    <Thumbnail>
      <img src={dev} alt="Sou Elivelton Rodrigues, um Software Engineer" />
    </Thumbnail>
    <Text>
      <span>Página não encontrada!</span>
    </Text>
  </Layout>
);
