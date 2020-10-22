import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_USER } from '../../GraphQL/querys';

const showLinkedInComponent = {
  showLinkedIn: function showLinkedIn(props) {
    return (
      <div className='eventDescLink'>
        <a className='primary' href={props.linkedIn}>LinkedIn</a>
      </div>
    );
  },
};
const showGithubComponent = {
  showGithub: function showGithub(props) {
    return (
      <div className='eventDescLink'>
        <a className='primary' href={props.github}>Github</a>
      </div>
    );
  },
};
const showPortfolioComponent = {
  showPortfolio: function showPortfolio(props) {
    return (
      <div className='eventDescLink'>
        <a className='primary' href={props.portfolio}>Portfolio</a>
      </div>
    );
  },
};

function UserMedia() {
  const history = useHistory();
  const githubLogin = history.location.pathname.split('/').slice(2).join();
  const { data } = useQuery(GET_USER, {
    variables: { githubLogin },
  });
  let linkedIn, github, portfolio;
  if (data?.getUser) {
    linkedIn = data.getUser.linkedIn;
    github = data.getUser.gitHub;
    portfolio = data.getUser.portfolio;
  }
  console.log('data:', data);
  return (
    <div className='d-flex justify-content-center my-1 '>
      {linkedIn ? (
        <span className='d-flex align-items-center mr-3'><i className="fab fa-linkedin mr-1 primary"></i><showLinkedInComponent.showLinkedIn linkedIn={linkedIn} /></span>
      ) : null}
      {github ? (
        <span className='d-flex align-items-center mr-3'><i className="fab fa-github mr-1 primary"></i><showGithubComponent.showGithub github={github} /></span>
      ) : null}
      {portfolio ? (
        <span className='d-flex align-items-center'><i class="fas fa-link mr-1 primary"></i><showPortfolioComponent.showPortfolio portfolio={portfolio} /></span>
      ) : null}
    </div>
  );
}
export default UserMedia;
