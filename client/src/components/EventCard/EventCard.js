import React from 'react';

import moment from 'moment';
import './EventCard.scss';
function EventCard({
  categories,
  date,
  eventDescription,
  eventLink,
  eventTitle,
  location,
  userName,
  participants,
}) {
  return (
    <div>
      <div className='eventCard'>
        <div className='eventHeader'>
          <h5 className='eventTitle'>{eventTitle}</h5>
          <h6 className='eventDate'>
            {moment(date * 1).format('MMMM Do , h:mm a')}
          </h6>
        </div>
        <div className='eventDetails'>
          <div className='eventDescLink'>
            <p className='eventDescription'>{eventDescription}</p>
            <a className='eventLink' href={eventLink}>
              Event Link
            </a>
          </div>
          <div className='eventCharacteristics'>
            <div className='eventCategories'>Event Categorie: {categories}</div>
            <div className='eventLocation'>Location: {location}</div>
            <div className='eventPeopleJoined'>
              People Joined: {participants}
            </div>
            <div className='eventCreatedBy'>Created by: {userName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
