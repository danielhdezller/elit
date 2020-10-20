import React from 'react';
import EventForm from '../../components/EventForm/EventForm';
import UserEventList from '../../components/UserEventList/UserEventList';
function MyEvents() {
  return (
    <div>
      <EventForm />
      <UserEventList />
    </div>
  );
}

export default MyEvents;
