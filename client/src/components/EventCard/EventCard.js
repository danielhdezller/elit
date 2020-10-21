import React from 'react';

import moment from 'moment';
// import './EventCard.scss';
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
    <div className="card my-3 ">
      <div className="card-header text-light d-flex justify-content-between">
        <div>
          <div className='d-flex align-items-center'>
            <i className="fas fa-calendar-check mr-2"></i>
            <h3 className='m-0 font-weight-bolder'>{eventTitle}</h3>
          </div>
          <span className="badge badge-info">{categories}</span>
        </div>
        <span>
          <i className="fas fa-user mr-2"></i>
          {participants}
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">{eventDescription}</p>
        <a href={eventLink} className="btn btn-primary">
        <i className="fas fa-link"></i> {` `}
          Go to the event
          </a>
      </div>
      <div className="card-footer text-dark d-flex justify-content-between">
        <span className='font-weight-bolder'>
          <i className="fas fa-map-marker-alt"></i>{` `}
          {location}
          <br />
          <i class="fas fa-clock"></i> {` `}
          {moment(date * 1).format('MMMM Do , h:mm a')}
        </span>
        <span className='font-weight-bold mt-auto'>{userName}</span>
      </div>

    </div>
  );
}

export default EventCard;
