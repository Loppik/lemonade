import React, { Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Flex } from '../../../styles';
import { CURRENCY_SYMBOLS } from './constants';
import { distanceBetweenTwoPoints } from '../../helpers';
import { UserLocationType } from './types';

const Container = styled.div`
  margin-right: 10px;
`

type HeaderProps = {
  cover: string;
}

const Header = styled.div<HeaderProps>`
  height: 180px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  ${props => props.cover ? (`
    background-image: url(${props.cover}), url(/defaultImage.jpg);
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: cover, cover;
  `) : (`
    background: #6d81ce
  `)}
`

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid white;
`

const Footer = styled(Flex)`
  min-height: 50px;
  border-radius: 10px;
  background: #242424;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`

const Price = styled.div`
  padding: 2px 12px;
  background: black;
  border: 1px solid grey;
  color: grey;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
`

const Title = styled.div`
  color: white;
`

const Info = styled.div`
  color: grey;
  font-size: 13px;
  font-weight: bold;
`

type EventCardProps = {
  cost: number;
  cover: string;
  currency: string;
  start: string;
  avatar: string;
  title: string
  eventLatitude: number;
  eventLongitude: number;
  userLocation: UserLocationType|null;
}

const EventCard = ({ cost, cover, currency, start, avatar, title, eventLatitude, eventLongitude, userLocation }: EventCardProps) => {
  const distance = userLocation && distanceBetweenTwoPoints(userLocation.longitude, userLocation.latitude, eventLongitude, eventLatitude);
  return (
    <Fragment>
      <Container>
        <Header cover={cover}>
          <Avatar src={avatar} />
        </Header>
        <Footer>
          <div>
            <Title>{title}</Title>
            <Info>{`${moment(start).format('ddd, DD MMM - h:mm a')} ${distance ? ` - ${distance} km` : ''}`}</Info>
          </div>
          <Price>{cost ? `${CURRENCY_SYMBOLS[currency]}${cost}` : 'free'}</Price>
        </Footer>
      </Container>
      <div className="back" />
    </Fragment>
  )
};

export default EventCard;
