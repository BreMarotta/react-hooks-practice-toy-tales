import React from "react";

function ToyCard({ card, onDeleteToy }) {
  const { id, name, image, likes } = card;

  function handleDelete() {
    fetch(`http://localhost:3001/toys${id}`, {
      method: "DELETE",
    });
    onDeleteToy(id);
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: {likes} + 1,
      }),
    })
      .then((r) => r.json())
      .then((likes) => console.log(likes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
