import React from 'react';
import EventForm from '../../components/EventForm/EventForm';
import UserEventList from '../../components/UserEventList/UserEventList';
import './MyEvents.scss';
function MyEvents() {
  return (
    <div className='myEvents'>
      <EventForm />
      <UserEventList />
    </div>
  );
}

export default MyEvents;
