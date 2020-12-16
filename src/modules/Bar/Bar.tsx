import React, { useState } from 'react';
import styled from 'styled-components';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { Flex } from '../../styles';
import BarElement from './BarElement';

const Container = styled(Flex)`
  width: 30vw;
  position: absolute;
  left: 35vw;
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
    <Container>
      <BarElement icon={faHome} text="home" onSelect={onSelect} isSelected={selectedBarText === 'home'} />
      <BarElement icon={faPlusCircle} text="create" onSelect={onSelect} isSelected={selectedBarText === 'create'}/>
      <BarElement icon={faInbox} text="inbox" onSelect={onSelect} isSelected={selectedBarText === 'inbox'} isHaveNotification />
    </Container>
  )
};

export default Bar;
