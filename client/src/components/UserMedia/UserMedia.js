import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { GET_USER_LOGED_IN } from '../../GraphQL/querys';

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
  const userId = useSelector((store) => store.authenticated.userId);
  const { data } = useQuery(GET_USER_LOGED_IN, {
    variables: { userId },
  });
  let linkedIn, github, portfolio;
  if (data?.getUserLogedIn?.linkedIn) {
    linkedIn = data.getUserLogedIn.linkedIn;
    github = data.getUserLogedIn.gitHub;
    portfolio = data.getUserLogedIn.portfolio;
  }
  console.log('data:', data);
  return (
    <div>
      {linkedIn ? (
        <showLinkedInComponent.showLinkedIn linkedIn={linkedIn} />
      ) : null}
      {github ? <showGithubComponent.showGithub github={github} /> : null}
      {portfolio ? (
        <showPortfolioComponent.showPortfolio portfolio={portfolio} />
      ) : null}
    </div>
  );
}
export default UserMedia;
