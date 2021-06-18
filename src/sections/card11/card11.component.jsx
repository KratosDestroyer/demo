import React from 'react';
import './card11.styles.scss';
import PrimaryButton from '../../components/button/button.component';

const Card11 = () => (
    <div>
        <div className="card4-container">
            <div className="card4-content">
                <div className="card4-content-title">
                    ready to empower your shop floor?
                </div>
                <div className="card4-content-text">
                    Get started with manufacturing analytics today
                </div>
                <div style={{display:"flex"}}>
                    <PrimaryButton color="#16a500">BOOK A DEMO</PrimaryButton>
                </div>
            </div>
        </div>
    </div>
);

export default Card11;