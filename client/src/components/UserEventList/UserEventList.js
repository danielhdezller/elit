import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER_EVENTS } from '../../GraphQL/querys';
import EventCard from '../../components/EventCard/EventCard';
import { useSelector } from 'react-redux';
import { DELETE_EVENT } from '../../GraphQL/mutations';

function UserEventList() {
  const { userId } = useSelector((state) => state.authenticated);
  console.log('userId:', userId);
  const [DeleteEvent] = useMutation(DELETE_EVENT, {
    refetchQueries: [
      {
        query: GET_USER_EVENTS,
        variables: { userId },
      },
    ],
  });
  const { data } = useQuery(GET_USER_EVENTS, {
    variables: { userId },
  });
  console.log('data:', data);
  let events = [],
    showEvents;
  if (data?.getEventByUser) {
    events = data.getEventByUser;
    let eventSorted = [...events].sort((a, b) => +a.date - +b.date);
    showEvents = eventSorted.map((event) => (
      <div key={event.id_event}>
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
        <div
          onClick={() =>
            DeleteEvent({ variables: { id_event: event.id_event } })
          }
        >
          <button className='btn badge badge-danger'>Delete</button>
        </div>
      </div>
    ));
  }

  return <div>{showEvents}</div>;
}

export default UserEventList;
