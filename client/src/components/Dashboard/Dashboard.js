import React, {useState} from 'react';
const Dashboard= () => {
  const [firstName, setFirstName]=useState('');
  const [familyName, setFamilyName]=useState('');
  const [techStack, setTechStack]=useState([]);
  const [gender, setGender]=useState('');
  const handleNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleFamilyNameChange = (e) => {
    setFamilyName(e.target.value);
  }

  return (
    <div>
      <h1>Hamed's Profile</h1>
      <form className='container'>
        <div className='row'>
          <div className='col-lg-2 bg-dark'>Profile settings</div>

          <div className='col-lg-10 bg-info'>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Name</label>
              <div className='col-sm-10'>
                <input type='text' className='form-control' value={firstName} onChange={handleNameChange}/>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Family name</label>
              <div className='col-sm-10'>
                <input type='text' className='form-control'value={familyName} onChange={handleFamilyNameChange}/>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>User name</label>
              <div className='col-sm-10'>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-2'>Gender</div>
              <div className='col-sm-10'>
                <div className='form-check'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>Male</label>

                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>Female</label>

                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>Other</label>
                </div>
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-2'>Tech stack</div>
              <div className='col-sm-10'>
                <div className='form-check'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>Javascript</label>

                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>Python</label>

                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>Golang</label>
                </div>
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-6'>
                <button type='submit' className='btn btn-primary'>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;



