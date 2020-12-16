import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex } from '../../styles';

type ContainerProps = {
  isSelected: boolean;
};
const Container = styled(Flex)<ContainerProps>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 9px;
  user-select: none;
  & path {
    fill: ${props => props.isSelected ? '#7e13c7' : 'grey'};
  }
  & div {
    color: ${props => props.isSelected ? '#7e13c7' : 'grey'};
  }
  ${props => !props.isSelected && `
    &:hover {
      cursor: pointer;
    }
    &:hover path {
      fill: white;
    }
    &:hover div {
      color: white;
    }
  `}
`

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
`

type NotificationDotProps = {
  isDisplay: boolean;
};
const NotificationDot = styled.div<NotificationDotProps>`
  width: 9px;
  height: 9px;
  border-radius: 10px;
  background: #d65927;
  border: 2px solid black;
  position: relative;
  left: 15px;
  bottom: 27px;
  visibility: ${props => props.isDisplay ? 'visible' : 'hidden'}
`

type Props = {
  icon: any; // TODO:
  text: string;
  onSelect: (text: string) => void;
  isSelected: boolean;
  isHaveNotification?: boolean;
}

const BarElement = ({ icon, text, onSelect, isSelected, isHaveNotification = false }: Props) => {
  const onContainerClick = () => onSelect(text);
  return (
    <Container isSelected={isSelected} onClick={onContainerClick}>
      <Icon icon={icon} />
      <div>{text}</div>
      <NotificationDot isDisplay={isHaveNotification} />
    </Container>
  );
}

export default BarElement;
