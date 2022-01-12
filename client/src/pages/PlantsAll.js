import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid/index";
import AllCards from "../components/AllCards";
import { useUserContext } from "../utils/globalState";

function PlantsAll() {
  const [allPlants, setAllPlants] = useState([]);
  const [userPlants, setUserPlants] = useState([]);
  const [state, dispatch] = useUserContext();
  const user = localStorage.getItem("user");

  useEffect(() => {
    loadPlant();
    // authenticate();
  }, [state]);

  function authenticate() {
    // if (!isLoggin) {
    //     window.location.pathname = '/'
    // }
  }

  function loadPlant() {
    API.getPlants()
      .then((res) => setAllPlants(res.data))

      .catch((err) => console.log(err));
    loadUserPlants();
  }

  function loadUserPlants() {
    API.getUser(user)
      .then((res) => {
        setUserPlants(res.data.plants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function savePlant(currentPlant) {
    let array = userPlants;
    array.push({
      name: currentPlant.name,
      botanical_name: currentPlant.botanical_name,
      height: currentPlant.height,
      usda_zones: currentPlant.usda_zones,
      image: currentPlant.image,
      description: currentPlant.description,
      next_water: "",
    });
    console.log(array);
    API.updateUserPlant(user, { plants: array })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err.response));
  }

  return (
    <div>
      <Container>
        {allPlants.length ? (
          <AllCards plantState={allPlants} savePlant={savePlant}></AllCards>
        ) : (
          <div>
            <hr />
            <p style={{ fontStyle: "italic" }}>No results to display</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default PlantsAll;
