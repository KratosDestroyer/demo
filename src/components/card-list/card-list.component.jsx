import React from 'react';
import './card-list.styles.scss';
import Card from '../card/card.component'

const CardList = (props) => (
    <div>
        <div className="card-list-container">
            { props.cardlist.map(i => (
                <Card handleClick={props.handleClick} i={i}></Card>
            )) }
        </div>
    </div>
);
export default CardList;