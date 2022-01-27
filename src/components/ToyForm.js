import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [newToyName, setNewToyName] = useState("");
  const [newToyImage, setNewToyImage] = useState("");

  const handleSubmit = (e) => {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newToyName,
        image: newToyImage,
        likes: 0,
      }),
    })
      .then((r) => r.json())
      .then((newToy) => onAddToy(newToy));
  }

  return (
    <div className="container">
      <form 
        onSubmit={handleSubmit}
        className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setNewToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
