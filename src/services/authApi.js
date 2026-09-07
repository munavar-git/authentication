import axios from "axios";

const API = "http://localhost:3000/users";

export function getUsers() {
  return axios.get(API);
}

export function registerUser(user) {
  return axios.post(API, user);
}