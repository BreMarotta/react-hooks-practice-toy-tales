import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyCards, setToyCards] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((r) => r.json())
    .then(setToyCards);
  }, []);

  function handleAddToy(newToy) {
    const updatedToyCards = [...toyCards, newToy];
    setToyCards(updatedToyCards)
  }

  function handleDeleteToy(id) {
    const newToyCards = toyCards.filter((card) => card.id !== id);
    setToyCards(newToyCards)
  }

  function handleLikeToy(id) {
    
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toyCards={toyCards}
        onDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;

// Deliverables
  // WORKS!
//When our application loads, make a GET request to /toys to fetch the toy array. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the ToyCard components on the page.

  // Works! 
//When the ToyForm is submitted, make a POST request to /toys to save a new toy to the server. Using the ideas of controlled form and inverse data flow, think about how to render a new ToyCard for the toy that you created.

  //Paritally works....not deleting from server but removes from DOM???
// When the Donate to Goodwill button is clicked, make a DELETE request to /toys/:id with the ID of the toy that was clicked to delete the toy from the server. The ToyCard that you clicked on should also be removed from the DOM.

// When the like button is clicked, make a PATCH request to /toys/:id with the id of the toy that was clicked, along with the new number of likes (this should be sent in the body of the PATCH request, as a object: { likes: 10 }), to update the toy on the server. Clicking on the button should also increase the number of likes on the DOM.
