import React, { useState } from 'react'; 
import Money from './components/Money'; 
import Team from './components/Team'; 
import ZombieFighters from './components/Fighters';
import './App.css'; 

const App = () => {
  const [team, setTeam] = useState([]); 
  const [money, setMoney] = useState(100); 
  const [totalStrength, setTotalStrength] = useState(0); 
  const [totalAgility, setTotalAgility] = useState(0); 
  const [errorMessage, setErrorMessage] = useState(''); 
return ( 
  <div>
    <h1>Welcome to Reactville!</h1>
    <Team 
      team = {team}
      totalStrength={totalStrength} 
      setTotalStrength={setTotalStrength}
      totalAgility= {totalAgility}
      setTotalAgility={setTotalAgility}
      /> 
    <Money money = {money}/>
    <ZombieFighters 
    team={team}
    setTeam={setTeam}
    money={money}
    setMoney={setMoney}
    errorMessage= {errorMessage}
    setErrorMessage={setErrorMessage}
    /> 
{errorMessage && <p style= {{ color: 'red'}}> { errorMessage }</p>}
  </div>
  ); 
}

export default App


