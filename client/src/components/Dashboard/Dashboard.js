import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_ALL_USERS } from '../../GraphQL/querys'

const Dashboard = () => {
  // const { loading, error, data } = useQuery(GET_ALL_USERS);

  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  // const [techStack, setTechStack] = useState([])

  const handleNameChange = (e) => setFirstName(e.target.value);
  const handleFamilyNameChange = (e) => setFamilyName(e.target.value);

  return (
    <div>
      <form className='container-fluid'>
        <div className='row mt-5'>
          <div className='col-lg-2 '>
            <h3>Profile </h3>
            {/* <h3>settings</h3> */}
          </div>
          <div className='col-lg-10'>
            <section className='rounded border border-secondary p-5 col-lg-10'>
              <div className='form-group row '>
                <label className='col-sm-2 col-form-label font-weight-bold'>
                  Name
                </label>
                <div className='col-sm-6'>
                  <input
                    type='text'
                    className='form-control'
                    value={firstName}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label font-weight-bold'>
                  Family name
                </label>
                <div className='col-sm-6'>
                  <input
                    type='text'
                    className='form-control'
                    value={familyName}
                    onChange={handleFamilyNameChange}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label font-weight-bold'>
                  User name
                </label>
                <div className='col-sm-6'>
                  <input
                    value='herol3oy'
                    disabled
                    type='text'
                    className='form-control'
                  />
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-sm-2 font-weight-bold'>Tech stack</div>
                <div className='col-sm-6'>
                  <div className='form-check'>
                    <div>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>Javascript</label>
                    </div>
                    <div>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>Python</label>
                    </div>
                    <div>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>Golang</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-sm-6'>
                  <button type='submit' className='btn btn-success'>
                    Save
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
