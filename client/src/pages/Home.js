import React, { useEffect, useState } from "react";
import { WeatherDiv, WeatherCard } from "../components/Weather";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { NeedWater, WaterCard } from "../components/NeedWater";
import { useUserContext } from "../utils/globalState";

function Home() {
  const [weather, setWeather] = useState([]);
  const [water, setWater] = useState([]);
  const [state] = useUserContext();
  // const [user, setUser] = useState();
  const id = localStorage.getItem("user");
  let today;
  let user = {};
  let isLoggin = true;

  useEffect(() => {
    localStorage.setItem("isLoggin", true);
    isLoggin = localStorage.getItem("isLoggin") === "true";
    authenticate();

    loadWeather();
    initUser();
  }, [state]);

  function authenticate() {
    if (isLoggin !== true) {
      window.location.pathname = "/";
    }
  }

  async function initUser() {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", state.userId);
    } else if (localStorage.getItem("user") === "undefined") {
      localStorage.setItem("user", state.userId);
    }
    getDay();
    await API.getUser(id)
      .then((res) =>
        res.data.plants.map((plant) => {
          if (plant.next_water) {
            if (plant.next_water.substr(0, 10) === today) {
              setWater((water) => [...water, plant]);
            }
          }
        })
      )
      .catch((err) => {
        console.log(err.response);
      });
  }

  function loadWeather() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      API.getWeather(lat, long).then((res) => {
        setWeather(res.data.daily);
      });
    });
  }

  function getDay() {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    today = year + "-" + month + "-" + day;
  }
  console.log(user);
  return (
    <Container>
      <div className="row mb-5">
        <div className="col-sm-12 col-md-12 col-lg-4 ">
          <p style={{ textAlign: "center", marginTop: "23px" }}>
            Welcome back!
            <br />
            The plants that need watering today are:
          </p>
          <NeedWater>
            <WaterCard data={water} />
          </NeedWater>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8">
          <Row>
            <WeatherDiv>
              <WeatherCard data={weather} />
            </WeatherDiv>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Home;
