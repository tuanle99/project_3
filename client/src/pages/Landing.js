import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../utils/globalState";

function Landing() {
  const history = useHistory();
  const userRef = useRef();
  const passRef = useRef();

  const [error, setError] = useState("");

  const [state, dispatch] = useUserContext();

  const handleLogin = (e) => {
    e.preventDefault();
    API.login({
      username: userRef.current.value,
      password: passRef.current.value,
    })
      .then((response) => {
        console.log(response);
        setError("");
        const user = {
          userId: response.data.user._id,
          username: response.data.user.username,
        };
        handleHomePage(user);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          setError(err.response.data.message);
        }
      });
  };

  function handleHomePage(e) {
    dispatch({
      type: "loggin",
      userId: e.userId,
      username: e.username,
    });
    history.push("/home");
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = {
      username: userRef.current.value,
      password: passRef.current.value,
      plants: [],
    };
    API.createUser(newUser).catch((err) => console.log(err));
  };

  useEffect(() => {
    localStorage.setItem("isLoggin", false);
    localStorage.setItem("user", "");
    checkUserLogin();
  }, []);

  function checkUserLogin() {
    API.auth()
      .then((response) => {
        if (response.data && response.data.logged_in) history.push("/home");
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mt-2">Welcome!</h1>
      <div
        style={{ height: 1, width: "100%", borderTop: "1px solid gray" }}
        className="mt-4"
      >
        {" "}
      </div>
      <div className="row">
        <div
          className="col-lg-8 col-md-8 col-sm-12 mt-5"
          style={{ display: "block", textAlign: "center" }}
        >
          <h2 className="mt-4">Plant Tracking</h2>
          <p className="mt-4">
            Create individual plant cards to track each plant in your garden. We
            provide templates to get started on most common plants, or you can
            add your own!
          </p>
          <h2 className="mt-5">Garden Journal</h2>
          <p className="mt-4">
            Our bread-and-butter - the garden journal allows you to free-write
            about your garden - things you’ve planted, watched grow, the
            progress any plants have made, to-buy lists, garden plans, and
            whatever else you want!
          </p>
          <h2 className="mt-5">Calendar</h2>
          <p className="mt-4">
            The calendar feature can help you track watering days or other
            significant activities for your garden.
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="input-group input-group-sm mt-lg-5 ">
            <input
              type="text"
              className="form-control mt-lg-5 mt-md-5"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Username"
              ref={userRef}
            />
          </div>
          <div class="input-group input-group-sm">
            <input
              type="password"
              className="form-control mt-3 "
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Password"
              ref={passRef}
            />
          </div>
          <div>{error}</div>
          <div className="text-right mt-3 mb-5">
            <Button variant="mr-2" onClick={handleSignup}>
              <u>Sign Up</u>
            </Button>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#5B7444",
                border: "none",
                borderRadius: 0,
              }}
              onClick={handleLogin}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
