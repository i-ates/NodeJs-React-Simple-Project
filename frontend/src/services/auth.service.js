import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(doctorID,hospitalID , password) {
    return axios
      .post(API_URL + "signin", {
        doctorID,
        hospitalID,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localimport axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(doctorID,hospitalID , password) {
    return axios
      .post(API_URL + "signin", {
        doctorID,
        hospitalID,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(doctorID, hospitalID, password) {
    return axios.post(API_URL + "signup", {
      doctorID,
      hospitalID,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
