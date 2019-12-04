import React from 'react';

import Card from '../Card/Card.component';
import './CardList.styles.scss';

const CardList = ({ monsters }) => {
  return (
    <div className="CardList">
      {
        monsters.map(monster => {
          return <Card key={monster.id} name={monster.name} id={monster.id} email={monster.email}/>
        })
      }
    </div>  
  )
}

export default CardList;