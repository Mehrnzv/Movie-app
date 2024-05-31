import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjE3NDE4ZGM4NzVlMWU2YzI4N2E1NjViMTUwMzg3YiIsInN1YiI6IjY1Y2EyZmExM2MzYWIwMDE4NGQwMWEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kCDo0qr_asIlML8brT_TZbwQX6eiOoAy5F_9FYzY3wk'
};

export const fetchFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
