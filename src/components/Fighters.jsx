import React, { useState } from 'react'; 

const ZombieFighters = ({ team, setTeam, money, setMoney }) => {
    const [fighters] = useState([
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]); 


  const handleAddFighter= (fighter) => {
    if (!team.some((member) => member.name ===fighter.name) &&
    money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money-fighter.price); 
    } else {
      console.log('Not enough money'); 

    }  

  }; 

  const handleRemoveFighter= (fighter) => {
    setTeam(team.filter((member) => member.name !== fighter.name)); 
    setMoney(money + fighter.price); 
  }

  return (
    <div>
      <h2> Zombie Fighters</h2>
    {fighters.map((fighter) => (
      <div key={fighter.name}> 
      <h2>(fighter.name)</h2>
        <img src = {fighter.img} alt={fighter.name} /> 
        <li>Price: ${fighter.price}</li>
        <li>Strength: {fighter.strength}</li>
        <li>Agility: {fighter.agility}</li> 
        <button onClick={() => handleAddFighter(fighter)}> Add to Team </button>     
        <button onClick={() => handleRemoveFighter(fighter)}>Remove fighter from Team</button>
</div> 
    ))}
</div> 
); 
 }; 

 export default ZombieFighters; 