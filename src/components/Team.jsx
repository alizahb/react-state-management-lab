import React, { useEffect } from 'react'; 

const Team = ({ team, totalStrength, setTotalStrength, totalAgility, setTotalAgility}) => {
  const calculateTotalStrength=(team) => {
    return team.reduce((acc, member) => acc+member.strength, 0);
  
  }; 

  
  const calculateTotalAgility = (team) => {
        return team.reduce((acc, member) => acc+member.agility, 0);
      }; 


      useEffect(() => {
        setTotalStrength(calculateTotalStrength(team)); 
        setTotalAgility(calculateTotalAgility(team)); 
    
      }, [Team, setTotalStrength, setTotalAgility]); 
    
    return (
      <div> 
        <h2> Team Members</h2>
        {Team.length===0 ? (
        <h3>Pick some team members!</h3>
        ) : (
     
        <ul>
        {team.map((member,index) => (
          <div key={index}>
            <li>(member.name)</li>
            <img src={member.img} alt={member.name} />
            <li>Price: ${member.price}</li>
            <li>Strength: {member.strength}</li>
            <li> Agility: {member.agility}</li>
            </div>
        ))}
        </ul> 
    )};
  <h3>Total Strength: {totalStrength}</h3>
  <h3>Total Agility: {totalAgility} </h3>
  </div> 
    ); 
  }; 
 
export default Team