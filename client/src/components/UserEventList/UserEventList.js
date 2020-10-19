import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_EVENTS } from '../../GraphQL/querys';
import EventCard from '../../components/EventCard/EventCard';
import { useSelector } from 'react-redux';

function UserEventList() {
  const { userId } = useSelector((state) => state.authenticated);
  const { data } = useQuery(GET_USER_EVENTS, {
    variables: { userId },
  });

  let events = [],
    showEvents;
  if (data?.getEventByUser) {
    events = data.getEventByUser;
    let eventSorted = [...events].sort((a, b) => +a.date - +b.date);
    showEvents = eventSorted.map((event) => (
      <div key={event.id_event} className='col-lg-3'>
        <EventCard
          key={event.id_event}
          categories={event.categories}
          date={event.date}
          eventDescription={event.description}
          eventLink={event.link}
          eventTitle={event.title}
          location={event.location}
          userName={event.eventLeader}
          participants={event.participants}
        />
        <div>hola</div>
      </div>
    ));
  }

  return <div>{showEvents}</div>;
}

export default UserEventList;
