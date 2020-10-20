import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_EVENTS } from '../../GraphQL/querys';
import EventCard from '../../components/EventCard/EventCard';

function CommunityEvents() {
  const { data } = useQuery(GET_ALL_EVENTS);

  let events = [],
    showEvents;
  if (data?.getEvents) {
    events = data.getEvents;
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
      </div>
    ));
  }

  return <div>{showEvents}</div>;
}

export default CommunityEvents;
