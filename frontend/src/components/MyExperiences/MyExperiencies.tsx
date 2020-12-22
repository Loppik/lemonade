import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateCard from './CreateCard';
import Carousel from 'react-multi-carousel';
import { UserLocationType } from './Events/types';
import EventCard from './Events/EventCard';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeEventsAction } from '../../modules/homeEvents/actions';
import { RootStateType } from '../../redux/types';
import { EventType } from '../../modules/homeEvents/types';

type MarginContainerProps = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}
const MarginContainer = styled.div<MarginContainerProps>`
  margin: ${props => `${props.mt || 0}px ${props.mr || 0}px ${props.mb || 0}px ${props.ml || 0}px`}
`

const Container = styled.div`
  user-select: none;
`

const StyledCarousel = styled(Carousel)`
  height: fit-content;
  transition: filter 0.5s;
  & > ul:hover li {
    filter: brightness(0.4);
    transition: filter 0.5s;
  }
  & > ul li {
    filter: brightness(1);
    z-index: 10;
    transition: filter 0.5s, z-index 0.5s 0.5s;
  }
  & li {
    padding: 14px 0;
  }
  & li:hover {
    filter: unset !important;
    z-index: 10000;
    cursor: pointer;
    transition: filter 0.5s;
  }
  & li:hover > div {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
  
  & li > div {
    transform: scale(1);
    transition: transform 0.5s;
  }
  
  & li:first-child:hover > div {
    transform: scale(1);
  }
`

const NoEventsBlock = styled.div`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
`

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    partialVisibilityGutter: 30,
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    partialVisibilityGutter: 30,
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    partialVisibilityGutter: 30,
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    partialVisibilityGutter: 30,
    items: 1
  }
};

const DEFAULT_LOCATION: UserLocationType = {
  latitude: 2.1734,
  longitude: 1.3851
}

const MyExperiences = () => {
  const [userLocation, setUserLocation] = useState<UserLocationType|null>(null);
  const events = useSelector((state: RootStateType) => state.homeEvents.data);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        dispatch(getHomeEventsAction(longitude, latitude));
      },
      (error) => {
        dispatch(getHomeEventsAction(DEFAULT_LOCATION.longitude, DEFAULT_LOCATION.latitude));
      }
    );
  }, []);

  return (
    <Container>
      {events ? (
        <StyledCarousel responsive={responsive} partialVisible>
          <MarginContainer mr={10}>
            <CreateCard/>
          </MarginContainer>
          {events.map((event: EventType)=> (
            <EventCard
              key={event.title}
              cost={event.cost}
              cover={event.cover}
              currency={event.currency}
              start={event.start}
              avatar={event.host_expanded.image_avatar}
              title={event.title}
              eventLatitude={event.latitude}
              eventLongitude={event.longitude}
              userLocation={userLocation}
            />
          ))}
          {events.length === 0 && (
            <NoEventsBlock>No events</NoEventsBlock>
          )}
        </StyledCarousel>
      ) : (
        <MarginContainer mr={10}>
          <CreateCard/>
        </MarginContainer>
      )}
    </Container>
  );
}

export default MyExperiences;
