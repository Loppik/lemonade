import React, { useState } from 'react';
import styled from 'styled-components';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { Flex } from '../../styles';
import BarElement from './BarElement';

const C = styled(Flex)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(transparent, #0000003b, #000000a3);
`

const Container = styled(Flex)`
  width: 30vw;
  justify-content: space-between;
  background: #242424;
  padding: 10px 40px;
  border-radius: 20px;
  border: 1px solid white;
`

const DEFAULT_SELECTED_BAR = 'home';

const Bar = () => {
  const [selectedBarText, setSelectedBarText] = useState(DEFAULT_SELECTED_BAR);

  const onSelect = (text: string) => setSelectedBarText(text);

  return (
    <C>
      <Container>
        <BarElement icon={faHome} text="home" onSelect={onSelect} isSelected={selectedBarText === 'home'} />
        <BarElement icon={faPlusCircle} text="create" onSelect={onSelect} isSelected={selectedBarText === 'create'}/>
        <BarElement icon={faInbox} text="inbox" onSelect={onSelect} isSelected={selectedBarText === 'inbox'} isHaveNotification />
      </Container>
    </C>
  )
};

export default Bar;
