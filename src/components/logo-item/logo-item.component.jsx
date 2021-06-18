import React from 'react';
import './logo-item.styles.scss'

const LogoItem = (props) => (
    <div>
        <div className="logo-item2">
            <img style={{width:"9.45vw", height:"4.55vw", textAlign:"center"}} src={props.image.imageURL} alt="" />
        </div>
    </div>
);

export default LogoItem;