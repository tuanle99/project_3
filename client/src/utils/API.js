import axios from "axios";

export default {
  // Gets all plants
  getPlants: function () {
    return axios.get("/api/plants");
  },
  // Gets the plant with the given id
  getPlant: function (id) {
    return axios.get("/api/plants/" + id);
  },
  // Deletes the plant with the given id
  deletePlant: function (id) {
    return axios.delete("/api/plants/" + id);
  },
  // Saves a plant to the database
  savePlant: function (plantData) {
    return axios.post("/api/plants", plantData);
  },

  updateUserPlant: function (id, data) {
    return axios.put("/api/user/" + id, data);
  },
  updateUserJournal: function (id, data) {
    return axios.put("/api/user/journals/" + id, data);
  },

  getWeather: function (lat, long) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=imperial&appid=c1ba9a1d8d332b1ef324e57e7f47dbdf`
    );
  },

  getUsers: function () {
    return axios.get("/api/user/");
  },

  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  createUser: function (newUser) {
    return axios.post("/api/user/", newUser);
  },
  login: function (user) {
    return axios.post("/api/user/login", user);
  },
  auth: function () {
    return axios.get("/api/user/auth");
  },
  logout: function () {
    return axios.post("/api/user/logout");
  },
};
