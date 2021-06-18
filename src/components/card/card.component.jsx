import React from "react";
import './card.styles.scss';

const Card = (props) => (
    <div>
        <div onClick={() => (props.handleClick(props.i.index))} className="active-img-btn">
            <div className="bottom-item-icon">
                <img src={props.i.cardImageURL} style={{width:"4vw", height:"4vw"}} alt="" />
            </div>
            <div className="bottom-item-copy" >
                <strong className="div-btn-title" style={{marginTop:"10px"}}> {props.i.cardTitle} </strong>
                <p className="div-btn-paragraph" style={{color:"green"}}> {props.i.cardText} </p>
            </div>
        </div>
    </div>
);

export default Card;