import React from 'react';
import './subnavbar.styles.scss'

const Subnavbar = (props) => (
    <div className = {props.className +" menu-overflow"}> 
    <ul>
        <li>Industy 1.0</li>
        <li> Industry 2.0</li>
    </ul>
    </div>

);

export default Subnavbar;