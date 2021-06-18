import React from 'react';
import './card5.styles.scss';


class Card5 extends React.Component{
    constructor() {
        super();

        this.state = {
            tablist: [
                {tabItem: "production monitoring",
                 classname: "current",
                 index: 0,},
                {tabItem: "condition monitoring",
                 classname: "",
                 index: 1,},
                {tabItem: "predictive maintenance",
                 classname: "",
                 index: 2},
                {tabItem: "process optimization",
                 classname: "",
                 index: 3}
            ],

            tabcontentleft: [
                {   preHeading: "machine monitoring",
                    heading: "PRODUCTION VISIBILITY AND ANALYTICS THAT DELIVER INSIGHTS IN MINUTES.",
                    description: "Identify production bottlenecks and inefficiencies with real-time machine data. Customizable real-time dashboards, reports, and notification systems empower factory floor workers to meet production goals.",
                    image: "https://www.machinemetrics.com/hubfs/current-shift-dashboard.png",
                    index: 0,
                },
                {   preHeading: "CONDITION MONITORING POWERED BY INDUSTRY 4.0",
                    heading: "USE REAL-TIME CONDITION DATA TO DRIVE YOUR MAINTENANCE PROGRAM.",
                    description: "Transform your approach to maintenance with real-time machine condition monitoring that deploys in minutes. Harness the power of machine data to keep your equipment running longer and healthier.",
                    image: "https://www.machinemetrics.com/hubfs/mm20-laptop_0030_Marox_Timeline_dropshadow.png",
                    index: 1,
                },
                {   preHeading: "PREDICTIVE MAINTENANCE",
                    heading: "PREDICT MACHINE FAILURES BEFORE THEY COST YOU DOWNTIME.",
                    description: "Supercharge your predictive analytics applications with high-frequency machine data to diagnose, predict, and avoid failures on your manufacturing equipment. No sensors required.",
                    image: "https://www.machinemetrics.com/hubfs/MM20-iphone-alert_dropshadow_v2.png",
                    index: 2,
                },
                {   preHeading: "BUILD WORKFLOWS THAT DELIVER OPTIMIZED PROCESSES",
                    heading: "CONTINUOUS IMPROVEMENT: DRIVEN BY DATA.",
                    description: "Our powerful, intuitive, and customizable production and process optimization apps are driven by analytics to let your team know exactly what they need to do, when they need to do it, and how to do it better.",
                    image: "https://www.machinemetrics.com/hubfs/MM20_Tablet_Opdash-Setup-1.png",
                    index: 3,
                },
            ],

            activetab: 0,
        }

        this.handleClick = (a) => (
            this.setState({activetab: a})
        )
    }

    

    render() {
        return(
            <div>
                <div className="integration-caraousal-main">
                <div className="card6-container-title">applications</div>
                    <ul style={{textAlign:"left"}} className="tabs">
                        {this.state.tablist.map(i => (
                                <li onClick={() => (this.handleClick(i.index))}
                                    className={i.index == this.state.activetab ? "current" : "asdasd"}
                                    style={{color:"black"}}>
                                    {i.tabItem}
                                </li>
                        ))}
                    </ul>
                    <div>
                        {this.state.tabcontentleft.map(i => (
                            <div className={i.index == this.state.activetab ? "tab-content current" : "tab-content"} >
                                <div className="tab-content-left">
                                    <div className="tab-content-left animated slideInLeft">
                                        <div className="tab-content-left-pre-heading"> {i.preHeading}</div>
                                        <div className="tab-content-left-heading"> {i.heading} </div>
                                        <div className="tab-content-left-description">{i.description}</div>
                                    </div>
                                </div>
                                <div className="tab-content-right animated slideInRight">
                                    <img style={{width:"35.09vw", height:"21.15vw"}} src={i.image} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
        );
    }
}

export default Card5;