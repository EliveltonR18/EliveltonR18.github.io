import React from 'react';
import { Layout, SEO } from 'components/common';
import { Thumbnail, Text } from './_styles';
import { Header } from '../components/theme';
import dev from 'assets/illustrations/not_found.svg'

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <Header />
    <Thumbnail>
      <img src={dev} alt="Error 404" />
    </Thumbnail>
    <Text>
      <span>Página não encontrada!</span>
    </Text>
  </Layout>
);
