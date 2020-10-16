import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function EventForm() {
  return (
    <div>
      <div>
        <h3>Add a new event to de community</h3>
        <Formik
          initialValues={{
            eventTitle: '',
            date: '',
            eventDescription: '',
            eventLink: '',
            category: '',
            location: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.eventTitle) {
              errors.eventTitle = 'Event title required';
            } else if (!values.date) {
              errors.date = 'Date required';
            } else if (!values.eventDescription) {
              errors.eventDescription = 'Description required';
            } else if (!values.category) {
              errors.category = 'Category required';
            } else if (!values.location) {
              errors.location = 'Location required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log('values:', values);
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log('eventTitle:', values.eventTitle);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type='eventTitle' name='eventTitle' />
              <ErrorMessage name='eventTitle' component='div' />
              <Field type='date' name='date' />
              <ErrorMessage name='date' component='div' />
              <Field type='eventDescription' name='eventDescription' />
              <ErrorMessage name='eventDescription' component='div' />
              <Field type='eventLink' name='eventLink' />
              <ErrorMessage name='eventLink' component='div' />
              <Field type='category' name='category' />
              <ErrorMessage name='category' component='div' />
              <Field type='location' name='location' />
              <ErrorMessage name='location' component='div' />
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EventForm;
