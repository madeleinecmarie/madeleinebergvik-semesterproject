import alert from '../components/alert.js';

export const apiCall = async function (url) {
  try {
    let response = await axios.get(url);
    let data = response.data;
    return data;
  } catch (error) {
    alert('alert-danger', error);
    console.log(error);
  } finally {
    document.querySelector('.loading').classList.add('hide');
  }
};
