import React from "react";
import "./style.css";

export function WeatherDiv({ children }) {
  return (
    <div
      className="weather-div"
      style={{ width: "100%", height: "100%", marginTop: "90px" }}
    >
      {children}
    </div>
  );
}

export function WeatherCard(props) {
  if (props.data.length > 0) {
    return (
      <div className="row">
        {props.data.slice(0, 5).map((day) => (
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              key={day.dt}
              className="card"
              style={{
                width: "90%",
                margin: "20px",
                backgroundColor: "#A3C586",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "10pt" }}>
                  {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </h5>
                <p className="card-text" style={{ fontSize: "9pt" }}>
                  Temperature: {day.temp.day}°
                </p>
                <p className="card-text" style={{ fontSize: "9pt" }}>
                  Humidity: {day.humidity}%
                </p>
                <p className="card-text" style={{ fontSize: "9pt" }}>
                  Chance of rain: {day.pop}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <h3 style={{ textAlign: "center", padding: "123px" }}>
        Loading weather...
      </h3>
    );
  }
}
