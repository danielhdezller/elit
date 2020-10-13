require('dotenv').config();
const fetch = require('node-fetch');

const requestGithubToken = (credentials) => {
  console.log('credentials:', credentials);
  return fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw new Error(JSON.stringify(error));
    });
};

const requestGithubUserAccount = (token) => {
  return fetch(`https://api.github.com/user?access_token=${token}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};

const requestGithubUser = async (credentials) => {
  const res = await requestGithubToken(credentials);
  const githubUser = await requestGithubUserAccount(res.access_token);
  console.log('githubUser:', githubUser); //TO SEE THE USER DATA RESPONSE OF GITHUB
  return { ...githubUser, access_token: res.access_token };
};

module.exports = {
  requestGithubUser,
};
