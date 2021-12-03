import Axios from "axios";
import React, {useState} from "react";
import SnackOrBoozeApi from "./Api";


//Create Component for adding new Snack/Drink to json file
function Create() {
    //Use state to hold form data
    const [drinkForm, updateDrinkForm] = useState({id: "", name: "", description: "", recipe: "", serve: "" });
    const [snackForm, updateSnackForm] = useState({id: "", name: "", description: "", recipe: "", serve: "" });


    //Update form changes with form in state
    function handleDrinkChange(e) {
        e.persist();
        updateDrinkForm(f => ({...f, [e.target.name]: e.target.value}))

    }

    function handleSnackChange(e) {
        e.persist();
        updateSnackForm(f => ({...f, [e.target.name]: e.target.value}))
    }


    
    //Handle form submission, send post request with form data, reset form
   async function handleDrinkSubmit(e) {
        e.preventDefault();
      await  SnackOrBoozeApi.sendDrinks(drinkForm)
      updateDrinkForm({id:"", name: "", description: "", recipe: "", serve: ""})
    }

   async function handleSnackSubmit(e) {
        e.preventDefault();
       await SnackOrBoozeApi.sendSnacks(snackForm)
       updateSnackForm({id: "", name: "", description: "", recipe: "", serve: ""})
    }
    //Return form
    return (
        <div>
          <form onSubmit={handleDrinkSubmit}>
            <div>
              <label htmlFor="Drink">Add Drink Form</label>
           

    <input type="text" name={drinkForm.id} placeholder="id"  onChange={handleDrinkChange} ></input>
    <input type="text" name={drinkForm.name} placeholder="name"  onChange={handleDrinkChange} ></input>
    <input type="text" name={drinkForm.description} placeholder="description"  onChange={handleDrinkChange} ></input>
    <input type="text" name={drinkForm.recipe} placeholder="recipe"  onChange={handleDrinkChange} ></input>
    <input type="text" name={drinkForm.serve} placeholder="serve"  onChange={handleDrinkChange} ></input>
            </div>
            
            <input type="Submit" value="Add this Drink" readOnly />
          </form>

          <form onSubmit={handleSnackSubmit}>
              
              <div>
              <label htmlFor="Snack">Add A Snack Form</label>
              <input type="text" name={snackForm.id} placeholder="id"  onChange={handleSnackChange} ></input>
              <input type="text" name={snackForm.name} placeholder="name"  onChange={handleSnackChange} ></input>
              <input type="text" name={snackForm.description} placeholder="description"  onChange={handleSnackChange} ></input>
              <input type="text" name={snackForm.recipe} placeholder="recipe"  onChange={handleSnackChange} ></input>
              <input type="text" name={snackForm.serve} placeholder="serve"  onChange={handleSnackChange} ></input>
            
              </div>
              <input type="Submit" value="Add this Snack" readOnly />
          </form>

          

        

        </div>
      );
}

export default Create;