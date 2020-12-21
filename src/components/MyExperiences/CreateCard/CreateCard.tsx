import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  height: 240px;
  padding: 20px;
  background: #6d81ce;
  border-radius: 10px;
  color: white;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 35px;
`

type CurrentTextProps = {
  isActive: boolean;
}
const CurrentText = styled.div<CurrentTextProps>`
  height: 30px;
  position: absolute;
  transition: opacity 1s;
  opacity: ${props => props.isActive ? '1' : '0'};
  color: #dadada;
`

const SUBTEXTS = ['hangout', 'experience', 'virtual festival', 'yoga class', 'stand up / open mic', 'masterclass', 'anything, anytime, anywhere'];

const CreateCard = () => {
  const [indexOfCurrentText, setIndexOfCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexOfCurrentText((curIndex) => curIndex + 1 >= SUBTEXTS.length ? 0 : curIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <Container>
        <Title>CREATE</Title>
        {SUBTEXTS.map((text, index, arr) => (
          <CurrentText isActive={index === indexOfCurrentText}>{text}</CurrentText>
        ))}
      </Container>
    </Fragment>
  )
};

export default CreateCard;
