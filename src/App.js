import React from 'react';
import Grid from './Grid';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  margin-top: 20px;
  font-size: 0.8em;
`;

const App = () => {
  return (
    <AppContainer>
      <Header>Rain Pattern Game</Header>
      <Grid />
      <Footer>© 2024 Rain Game - Divyanshu</Footer>
    </AppContainer>
  );
};

export default App;
