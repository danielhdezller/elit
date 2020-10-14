import data from '../mockData';
const BASE_URL = 'http://localhost:3001';

export const getUserProfileInfo = () => {
  // return fetchRequest(`dashboard`);
  return setTimeout(function() {
    console.log(data)
    return data
  }, 1000)
};

const fetchRequest = (url, method) => {
  return fetch(`${BASE_URL}/${url}`, method)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      console.log(`${err.message} while fetching /${url}`);
    });
};

