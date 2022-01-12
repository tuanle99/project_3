import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Journal from "./pages/Journal";
import PlantCards from "./pages/PlantCards";
import PlantsAll from "./pages/PlantsAll";
import { UserProvider } from "./utils/globalState";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/journal" component={Journal} />
            <Route exact path="/cards" component={PlantCards} />
            <Route exact path="/plants" component={PlantsAll} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
