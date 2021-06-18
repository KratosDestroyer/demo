import React from 'react';
import './button.styles.scss'

const PrimaryButton = (props) => (
       <div className="primarybutton" style={{backgroundColor:props.color}}> {props.children} </div>
    );

export default PrimaryButton;