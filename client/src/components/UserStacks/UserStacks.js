import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_USER } from '../../GraphQL/querys';

function UserStacks() {
  const history = useHistory();
  const githubLogin = history.location.pathname.split('/').slice(2).join();
  const { data } = useQuery(GET_USER, {
    variables: { githubLogin },
  });
  let stacks = [],
    showStacks;
  if (data?.getUser?.userStacks) {
    stacks = data.getUser.userStacks;
    console.log('stacks:', stacks);
    showStacks = stacks.map((stack) => (
      <Chip size='small' color='primary' label={stack} />
    ));
  }
  return <div>{showStacks}</div>;
}
export default UserStacks;
