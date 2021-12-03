import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import Create from "./Create";
import Error from "./404 Error";


//Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);


  //Retrieve Snacks/Drinks from DB when App renders
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);


  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }


  //Render routes with associated components to be rendered
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}  />
            </Route> 
            <Route exact path="/drinks">
              <FoodMenu items={drinks} title="drinks" />
            </Route>

            <Route exact path="/snacks">
              <FoodMenu items={snacks} title="snacks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks}  cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks}  cantFind="/drinks" />
            </Route>
            <Route exact path="/create">
              <Create  />
            </Route>
            <Route component={Error}>
              
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
