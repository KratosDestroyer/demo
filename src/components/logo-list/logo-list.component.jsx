import React from 'react';
import './logo-list.styles.scss'
import  LogoItem  from '../logo-item/logo-item.component';

const LogoList = (props) => (
    <div>
        <div className="logo-list-container2">
            { props.images.map(image => (
                <LogoItem image={image}/>
            )) }
        </div>
    </div>
);

export default LogoList;