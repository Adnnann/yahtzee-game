import logo from '../assets/yatzy.jpg'
import Dices from './Dices';
import { Image } from 'semantic-ui-react';

const Game = () => {

  return (
    <div className="ui center aligned container" style={{marginTop:"1%"}}>
      <Image src={logo} size='small' className='logo'/>
      <Dices />
    </div>
  )

    

}

export default Game;