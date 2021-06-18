import React from 'react';

import '../download/download.styles.scss';

const Download = () => (
    <div>
        <div className="container">
            <div className="download">
                <div className="download-text">
                    Download
                </div>
            </div>
        </div>

        <div className="content-container">
            <div className="cell">
                <div className="cell-column-1">
                    <div className="row-1">WISCON PRODUCTS CASE STUDY</div>
                    <div className="row-2">Optimizing Equipment utilization</div>
                    <div className="row-3">
                        <img className="image-row" src="https://www.machinemetrics.com/hs-fs/hubfs/case-study-cover-thumbnail.png?width=831&name=case-study-cover-thumbnail.png" alt="img" />
                    </div>
                </div>
                <div class="cell-column-2">
                    <div id="large-text">
                        OUR LATEST SUCCESS STORY FEATURES WISCON PRODUCTS, AN ADVANCED CNC PRECISION TURNED PARTS MANUFACTURER
                    </div>
                    <div className="text">
                        <div className="paragraph">
                        1945, Wiscon Products of Racine, WI has produced quality precision parts for the
                        aerospace, medical, energy, automotive, construction and power industries as well as many others. In 2018,
                        Wiscon began utilizing MachineMetrics at their facility in Racine to further improve their efficiency and 
                        Overall Equipment Effectiveness. The objective with MachineMetrics was to closely align with core goals of 
                        process improvement, reduced downtime and increased equipment utilization to better service their growing 
                        client base and gain full control of the data available to them.
                        </div>

                        <div className="paragraph">Learn how MachineMetrics helped Wiscon Products, an advanced CNC precision turned parts manufacturer, 
                            improve their efficiency and Overall Equipment Effectiveness.
                        </div>

                        <div className="paragraph">This case study details all of the fantastic gains that Torben Christensen,
                            President/CEO of Wiscon Products, was able to see after implementing MachineMetrics, including:
                        </div>

                        <ul className="list">
                            <li>Data Accuracy</li>
                            <li>Increased Operator Productivity</li>
                            <li>Accurate Production and Utilization Monitoring</li>
                            <li>INcrease in Ocerall Capacity</li>
                        </ul>

                        <p className="paragraph">Fill outyour information in the space provided, and we will email you a PDF of this case study immediately</p>

                        <div className="fill-form">
                            <p className="form-heading">FILL OUT AND RECEIVE CASE STUDY PDF VIA EMAIL!</p>
                            <form action="">
                                <label htmlFor="fName" className="form-label">First Name</label>
                                <input type="text" id="fName" name="fName" className="form-input" /><br />
                                <label htmlFor="lName" className="form-label">Last Name</label>
                                <input type="text" id="lName" name="lName" className="form-input" /><br />
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="text" id="email" name="email" className="form-input" /><br />
                                <label htmlFor="companyName" className="form-label">company</label>
                                <input type="text" id="nCompany" name="nCompany" className="form-input" /><br />
                                <input type="submit" value="submit" className="submit-btn" /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Download;