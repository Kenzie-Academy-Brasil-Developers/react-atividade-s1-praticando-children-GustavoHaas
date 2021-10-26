import pato from './pato.png';
import './App.css';

import CenteredCard from "./components/CenteredCard"

function App() {
  return (
    <div className="App">
      <CenteredCard> <h1>Patinho da Kenzie é um ótimo professor!</h1> </CenteredCard>
      <CenteredCard> <img src={pato}></img> </CenteredCard>
      <CenteredCard> <h1>Kenzie Academy Brasil!</h1> </CenteredCard>
    </div>
  );
}

export default App;
