/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_KEY = '4f48b0d807a97f7455a09208d2321067';
const BASE_URL = 'https://api.themoviedb.org/3';

const getMovieSearch = (searchParam) => {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    page: 1,
    include_adult: false,
    query: searchParam,
    api_key: API_KEY,
  });
  return axios.get(`${BASE_URL}/search/movie?${searchParams}`);
};

const getMovieTrends = () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${BASE_URL}/trending/all/day?${searchParams}`);
};

const getMovieDetailId = (movieId) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${BASE_URL}/movie/${movieId}?${searchParams}`);
};

const getMovieCastId = (movieId) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${BASE_URL}/movie/${movieId}/credits?${searchParams}`);
};

const getMovieReviewId = (movieId) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  });
  return axios.get(`${BASE_URL}/movie/${movieId}/reviews?${searchParams}`);
};

export {
  getMovieSearch,
  getMovieTrends,
  getMovieDetailId,
  getMovieCastId,
  getMovieReviewId,
};
