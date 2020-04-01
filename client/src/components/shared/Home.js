import React from 'react';
import { Header, } from 'semantic-ui-react';
import { photo } from '../../images/me.png';

const Home = () => (
  <Header 
    as="h3" 
    textAlign="center">
    Devise Auth App
    <img src={photo} />
  </Header>

)
export default Home;