import React from 'react';
import './card3.styles.scss';
import PrimaryButton from '../../components/button/button.component';

const Card3 = () => (
    <div>
        <div className="card3-container">
            <div className="card3-fixed-container">
                <div style={{height:"69px"}}>
                    
                </div>
                <div className="card3-title">
                    "30% increase in capacity"
                </div>
                <div className="card3-subtitle">
                    <span style={{fontWeight:"bold"}}>Torben Christensen,</span> President of Wiscon Products
                </div>
                <div className="card3-case-study-container">
                    <div className="card3-case-study-cover">
                        <img style={{width:"8.46vw", height:"10.93vw"}} src="https://www.machinemetrics.com/hs-fs/hubfs/case_study_cover_wiscon-80_500%E2%80%8A%C3%97%E2%80%8A647.jpg?width=195&height=252&name=case_study_cover_wiscon-80_500%E2%80%8A%C3%97%E2%80%8A647.jpg" alt="" />
                    </div>
                    <div>
                        <div className="card3-case-study-description">
                            Learn how MachineMetrics helped Wiscon Products navigate their digital factory 
                            transformation!
                        </div>
                        <div style={{display:"flex"}}>
                            <PrimaryButton color="#16a500">
                                DOWNLOAD THE CASE STUDY
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
);

export default Card3;