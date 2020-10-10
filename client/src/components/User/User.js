import React from 'react'

const User = () => {
  return(
    <div className="card" style={{width: '18rem'}}>
    {/* <img src="..." className="card-img-top" alt="..."> */}
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <span className="btn btn-primary">Go somewhere</span>
    </div>
  </div>
  );
}

export default User;