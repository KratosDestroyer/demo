import React from 'react';
import './card6.styles.scss';

class Card6 extends React.Component{
    constructor(){
        super();

        this.state = {
            tablist: [
                {tabItem: "erp",
                 classname: "current",
                 index: 0,},
                {tabItem: "cmms",
                 classname: "",
                 index: 1,},
                {tabItem: "work instructions",
                 classname: "",
                 index: 2},
                {tabItem: "bi tools",
                 classname: "",
                 index: 3},
                {tabItem: "communications",
                 classname: "",
                 index: 4},
            ],

            tabcontent: [
                {   classname: "tab-content2-right animated slideInRight",
                    index: 0,
                    imageTab: [
                                {image: "https://www.machinemetrics.com/hubfs/logo_epicor.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_jobboss.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_infor.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_sap.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_oracle.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_plex.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_odoo.svg"},
                                {image: "https://www.machinemetrics.com/hubfs/globalshopsolutions_logo.png"}
                              ],
                },
                {   classname: "tab-content2",
                    index: 1,
                    imageTab: [
                                {image: "https://www.machinemetrics.com/hubfs/logo_fiix.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_upkeep.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_ibm_maximo.svg",},
                              ],
                },
                {   classname: "tab-content2",
                    index: 2,
                    imageTab: [
                                {image: "https://www.machinemetrics.com/hubfs/logo_parsable.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_vks.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_paperless_parts.svg",},
                              ],
                },
                {   classname: "tab-content2",
                    index: 3,
                    imageTab: [
                                {image: "https://www.machinemetrics.com/hubfs/logo_parsable.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_vks.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_paperless_parts.svg",},
                              ],
                },
                {   classname: "tab-content2",
                    index: 4,
                    imageTab: [
                                {image: "https://www.machinemetrics.com/hubfs/logo_parsable.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_vks.svg",},
                                {image: "https://www.machinemetrics.com/hubfs/logo_paperless_parts.svg",},
                              ],
                },
            ],

            activetab: 0,
        }

        this.handleClick = (a) => (
            this.setState({activetab: a})
        )

    }

    render(){
        return(
            <div>
                <div className="integration-caraousal-main2">
                    <div className="card7-container-title">INTEGRATIONS</div>
                    <ul style={{textAlign:"right"}} className="tabs">
                        {this.state.tablist.map(i => (
                                <li onClick={() => (this.handleClick(i.index))}
                                    className={i.index == this.state.activetab ? "current" : "asdasd"}
                                    style={{color:"black"}}>
                                    {i.tabItem}
                                </li>
                        ))}
                    </ul>
                    <div className= "tab-content2 current">
                        <div className="tab-content2-left">
                            <h3>Explore Our Integration</h3>
                            <p>
                                From out-of-the-box, no-code solutions to our build it yourself API, it’s never been 
                                 easier to seamlessly integrate machine data-driven insights with your current shop floor systems and 
                                drive automation.
                            </p>
                        </div>
                        {this.state.tabcontent.map(i => (
                            <div className={i.index == this.state.activetab ? "tab-content2-right animated slideInRight" : "tab-content2"}>
                                {i.imageTab.map(p => (
                                    <div className="tab-content2-logo">
                                        <img style={{width:"8.78vw", height:"3.25vw"}} src={p.image} alt="" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Card6;