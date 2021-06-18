import React from 'react';
import './card2.styles.scss';
import CardList from '../../components/card-list/card-list.component';

class Card2 extends React.Component{
    constructor() {
        super();

        this.state = {
            cardlist: [
                {index: 0,
                 cardImageURL: "https://www.machinemetrics.com/hubfs/mm20_icon_home_connect_any_mach_3.svg",
                 cardTitle: "Connect",
                 cardText: "connect, collect and visualize data from any piece of equipment on the shop floor"},
                {index: 1,
                 cardImageURL: "https://www.machinemetrics.com/hubfs/mm20_icon_home_analyze.svg",
                 cardTitle: "Analyze",
                 cardText: "connect, collect and visualize data from any piece of equipment on the shop floor"},
                {index: 2,
                 cardImageURL: "https://www.machinemetrics.com/hubfs/mm20_icon_home_take_action.svg",
                 cardTitle: "Take Action",
                 cardText: "connect, collect and visualize data from any piece of equipment on the shop floor"}
            ],

            images: [
                {image: "https://www.machinemetrics.com/hubfs/website_work_model.435-retouch_dropshadow.png",
                 index: 0,},
                {image: "https://www.machinemetrics.com/hubfs/machinemetrics-downtime-report.png",
                 index: 1,},
                {image: "https://www.machinemetrics.com/hubfs/LabelFailures-NewFrame-2.gif",
                 index: 2,},
            ],

            activeTab: 0,
        }

        this.handleClick = (a) => (
            this.setState({activeTab: a})
        )
    }

    render() {
        return(
            <div>
                <div className="card2-container">
                    <div className="card2-fixed-container">
                        <div className="card2-top-section">
                            {this.state.images.map(i => (
                                <div className={i.index == this.state.activeTab ? "" : "hide"}>
                                    <img style={{width:"37.5vw", height:"25vw"}} src={i.image} alt="" />
                                </div>
                            ))}
                            <div>
                                <div style={{marginLeft:"55px"}}>
                                    <div className="right-text-title">
                                        increase throughput. maximize profitability
                                    </div>
                                    <div className="right-text">
                                        <p>
                                            For manufacturers, it’s never been more important to deliver the best product faster than ever. 
                                            Continuous improvement in manufacturing starts with capturing insights from your operations- 
                                            specifically your machine assets and people. MachineMetrics’ Industrial IoT Platform has automated 
                                            machine data collection and production analytics to deliver data-driven insights in a matter of
                                            minutes. Jumpstart your digital factory and take action that improves your bottom line.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CardList handleClick={this.handleClick} cardlist={this.state.cardlist}></CardList>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card2;