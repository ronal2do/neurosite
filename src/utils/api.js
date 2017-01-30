const API_URL = (process.env.NODE_ENV !== 'production') ?
  'http://neuroedu.co/api':
  'http://neuroedu.co/api';

import axios from 'axios';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// newest
export const getNewestList = async (id = '') => {
  let { data } = await axios.get(`/newest/${id}`);

  return data;
};

// Category
export const getCategoryList = async (id = '') => {
  const { data } = await axios.get(`/category/${id}`);

  return data;
};

// Article
export const getArticleList = async (id = '') => {
  const { data } = await axios.get(`/article/${id}`);

  return data;
};

// Professional
export const getProfessionalsList = async (id = '') => {
  const { data } = await axios.get(`/professional/${id}`);

  return data;
};

// event
export const getEventsList = async (id = '') => {
  const { data } = await axios.get(`/event/${id}`);

  return data;
};
