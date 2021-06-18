import React from 'react';
import './animator.styles.scss'

import PrimaryButton from '../../components/button/button.component'

const AnimScroll = () => (
    <div>    
        <div className="container">
            <div className="home-scroller">
                <div className="home-intro">
                    HARNESS THE POWER OF MACHINE DATA.
                </div>
                <div>
                
                </div>
        </div>
        <br/>

        <div style={{float:'left', color: 'white', fontWeight:'bold'}}>
            MACHINEMETRICS INDUSTRIAL IOT PLATFORM FOR MACHINES
        </div>
        <br/>
        <div style={{float: 'left' , paddingTop:'1vw', display: 'flex'}}>
        <PrimaryButton >
            WATCH THE VIDEO
        </PrimaryButton>
        <PrimaryButton color='brown'> 
            BOOK A DEMO
        </PrimaryButton>
        </div>


        </div>


    </div>
) ;

export default AnimScroll;