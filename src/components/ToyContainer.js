import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyCards, onDeleteToy }) {
  return (
    <div id="toy-collection">
      {toyCards.map((card) => (
        <ToyCard
          key={card.id} 
          card={card}
          onDeleteToy={onDeleteToy}
          />
      ))}
    </div>
  );
}

export default ToyContainer;
