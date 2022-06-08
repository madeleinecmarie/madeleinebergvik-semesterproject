export const apiUrl = `https://semester-project2-ili.herokuapp.com`;

export const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
};
