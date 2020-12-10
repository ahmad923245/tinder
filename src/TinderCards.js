import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";


function TinderCards() {
  const [people, setpeople] = useState([]);


  React.useEffect(()=>{

  const unsubscribe =  database.collection('/people').onSnapshot(snapshot=>{
     setpeople(snapshot.docs.map(doc=>doc.data()))
   })
return ()=>{
  unsubscribe();
}
  },[])
  return (
    <div>
        <div className="tinderCards__cardContainer">
      {people.map((person) => {
        return (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        );
      })}
    </div>
    </div>
  );
}

export default TinderCards;
