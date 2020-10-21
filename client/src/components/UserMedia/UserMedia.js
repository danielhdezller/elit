import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_USER } from '../../GraphQL/querys';

const showLinkedInComponent = {
  showLinkedIn: function showLinkedIn(props) {
    return (
      <div className='eventDescLink'>
        <a href={props.linkedIn}>LinkedIn</a>
      </div>
    );
  },
};
const showGithubComponent = {
  showGithub: function showGithub(props) {
    return (
      <div className='eventDescLink'>
        <a href={props.github}>Github</a>
      </div>
    );
  },
};
const showPortfolioComponent = {
  showPortfolio: function showPortfolio(props) {
    return (
      <div className='eventDescLink'>
        <a href={props.portfolio}>Portfolio</a>
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
        <span className='mr-2'><showLinkedInComponent.showLinkedIn linkedIn={linkedIn} /></span>
      ) : null}
      {github ? <showGithubComponent.showGithub github={github} /> : null}
      {portfolio ? (
        <showPortfolioComponent.showPortfolio portfolio={portfolio} />
      ) : null}
    </div>
  );
}
export default UserMedia;
