import React from 'react';
import './card8.styles.scss';

class Card8 extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="carousel-container">
                <div className="carousel-slide">
                    <div className="slider-left">
                        <div className="slider-big-header">accelerate vasdfas</div>
                    </div>
                    <div className="slider-right">
                        <div className="slider-right-heading">76% of IIoT Implementations fail!</div>
                        <div className="slider-right-text">IoT platform implementations have historically had a high rate of failure within this vertical. What’s contributing to these failure rates, and what needs to change?  Allow us to introduce a new approach that is already changing the story.</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card8;