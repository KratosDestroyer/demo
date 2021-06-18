import React from 'react';
import './header.styles.scss'
import image1 from './images/Logo.png'
import Subnavbar from '../../components/subnavbar/subnavbar.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

render () {
    return(
<div>
    <div className="menu-container">
            <div className="logo-container">
                <img alt='NeuraTwin' className="logo-image" src={image1}></img>
            </div>
            
            <div className="menu-items">
                <div className="ind-items">Platform</div>
                <div className="ind-items">
                    Solutions
                    <FontAwesomeIcon style={{marginLeft:"10px", fontSize:"0.5vw" }} icon={faChevronDown} />
                    </div>
                
                <div className="ind-items">
                    Company
                    <FontAwesomeIcon style={{marginLeft:"10px",  fontSize:"0.5vw" }} icon={faChevronDown} />
                    </div>
                <div className="rs-items" id="Resources">
                    Resources
                    <FontAwesomeIcon className="rs-icon" style={{marginLeft:"10px" , fontSize:"0.5vw" }} icon={faChevronDown} />
                    <Subnavbar className="menu-overflow"></Subnavbar>
                    </div>

                    
            </div>
            <div className="side-items">
                <div className="button">Book A Demo</div>
                <div className="ind-items">  Sign in</div>
            </div>
            
    </div>
    
</div>
    )
}
}
export default Header;