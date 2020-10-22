import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { GET_USER_LOGED_IN } from '../../GraphQL/querys';

function UserStacks() {
  const userId = useSelector((store) => store.authenticated.userId);
  const { data } = useQuery(GET_USER_LOGED_IN, {
    variables: { userId },
  });
  let stacks = [],
    showStacks;
  if (data?.getUserLogedIn?.userStacks) {
    stacks = data.getUserLogedIn.userStacks;
    console.log('stacks:', stacks);
    showStacks = stacks.map((stack) => (
      <Chip style={{backgroundColor:'#25A2B8', color:'#fff', margin:'0 3px', fontWeight:'bolder'}} size='small' label={stack} />
    ));
  }
  return <div>{showStacks}</div>;
}
export default UserStacks;
