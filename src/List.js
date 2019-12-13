import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import Nav from './Nav';

function List() {
  const [ingredients, setIngredients] = useState([]);

  // loads ingredients from DB on page load
  useEffect(() => {
    const url = `http://172.20.200.23:3001/list`;
    superagent.get(url)
    .then(result => {
      const ingredientsArray = JSON.parse(result.text);
      // calls below function to split the string into an array
      setIngredients(splitList(ingredientsArray));
    });
  }, []); // [] ensures that the this only happens on page load

  // function that takes string object and splits it into components
  function splitList(recipesArray){
    // using set so that we have no duplicate values
    let ingreds = new Set();
    for (let i = 0; i < recipesArray.length; i++) {
      // handles the case of no ingredients being held in the object
      if (recipesArray[i].ingredients !== null){
        let temp = recipesArray[i].ingredients.split(', ');
        for (let j = 0; j < temp.length; j++) {
          // makes lowercase to keep from having multiple entries if case is different
          ingreds.add(temp[j].toLowerCase());
        }
      }
    }
   // changes the Set into an array to be stored in state
   return Array.from(ingreds);
  }

  return(
    <div>
      <Nav />
      <h1>Shopping List</h1>
      {/* maps over the array of ingredients and lists them as checkboxes */}
      {ingredients.map((ingredient, i) => <Checkbox key={i} ingredient={ingredient} /> )}
    </div>
  )
}

// makes each entry a list item with checkbox
function Checkbox(props) {
  return(
    <div>
      <input type="checkbox" name={`ingredient${props.key}`}/>
      <label htmlFor={`ingredient${props.key}`}>{props.ingredient}</label>
    </div>
  )
}

export default List;