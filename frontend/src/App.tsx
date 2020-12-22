import React from 'react';
import styled from 'styled-components';
import Bar from './components/Bar';
import MyExperiences from './components/MyExperiences';

const Container = styled.div`
  padding: 20px;
`


const App = () => {
  return (
    <Container>
      <Bar />
      <MyExperiences />
    </Container>
  );
}

export default App;
