import { Container } from 'semantic-ui-react';
import './App.css';
import ScoringCategory from './components/ScoringCategory';
import Dices from './components/Dices';

function App() {
  return (
    
    <div className="ui center aligned container">
      <Dices />
      <ScoringCategory />
    </div>

  
      
  );
}

export default App;
