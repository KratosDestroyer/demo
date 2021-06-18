import React from 'react';
import './card10.styles.scss';
import PrimaryButton from '../../components/button/button.component';

class Card10 extends React.Component{
    constructor() {
        super();

        this.state = {
            bottomRow: [
                {index: 0,
                 image: "https://www.machinemetrics.com/hubfs/mm20_icon_R2_industry%20aerospace.svg",
                 title: "aerospace+defence",
                 text: "By analyzing machine data in real time, Aerospace and Defense manufacturers can dramatically improve quality, raise efficiency, reduce costs and gain competitive advantage"},
                {index: 1,
                 image: "https://www.machinemetrics.com/hubfs/mm20_icon_R2_industry%20auto.svg",
                 title: "automotive",
                 text: "Automotive manufacturers need an IoT strategy empowered by a platform that can leverage the expertise already within the factory. It’s time to unleash your machine's data so it can be your competitive advantage."},
                {index: 2,
                 image: "https://www.machinemetrics.com/hubfs/mm20_icon_R2_industry%20heavy%20mach.svg",
                 title: "heavy machinery",
                 text: "Overcome shrinking margins, complex global supply chains and shorter production deadlines using real-time production data. Increase production accuracy to meet higher international quality standards. It all starts here."},
                {index: 3,
                 image: "https://www.machinemetrics.com/hubfs/mm20_icon_R2_industry%20med.svg",
                 title: "medical device",
                 text: "A mounting competition and increasing pressure on pricing have made it even more important to capture and analyze production data to improve your ability to deliver the best product as quickly as possible."}
            ],

            topRow: [
                {index: 0,
                 bigTitle: "5 DAYS TO ROI.",
                 title: '"MACHINEMETRICS IS OUR GAME-CHANGER"',
                 text: "In their own words, learn about all of the fantastic gains one aerospace manufacturing CEO and his team were able to experience after implementing MachineMetrics. Their investment in MachineMetrics paid for itself in just 5 days!"},
                {index: 1,
                 bigTitle: "FASTENAL CASES STUDY",
                 title: "FASTENAL ADDS 30% CAPACITY  IN 3  MONTHS",
                 text: "For Fastenal, their investment in MachineMetrics paid for itself in less than 30 days and allowed them to run faster, gain production hours, take on more jobs, and produce more parts than ever before."},
                {index: 2,
                 bigTitle: "REVEALING HIDDEN CAPACITY",
                 title: "MACHINEMETRICS DELIVERS ROI IN 30 DAYS",
                 text: "We interviewed Austin Peterson, CEO of Carlson, to learn about all of the fantastic gains his company was able to see after implementing MachineMetrics. For Austin and his team at Carlson, their investment in MachineMetrics paid for itself in 30 days."},
                {index: 3,
                 bigTitle: "20% INCREASE IN OEE.",
                 title: "A CASE STUDY FEATURING ACCUROUNDS",
                 text: "Within one year of implementing MachineMetrics, AccuRounds had connected twenty-three machines and were driving process improvements and greater collaboration between engineers and machinists. The numbers speak for themselves."}
            ],

            activeTab: 0,
        }

        this.handleClick = (a) => (
            this.setState({activeTab: a})
        )
    }

    render() {
        return(
            <div className="card10-container">
                {this.state.topRow.map(i => (
                <div>
                    <div className={i.index == this.state.activeTab ? "csfmc-item-top active" : "csfmc-item-top"} >
                        <div className="csfmc-it-cont">
                            <div className="csfmc-it-left">
                                <div style={{height:"97px"}}></div>
                                <div className="csfmc-big-title animated slideInLeft">{i.bigTitle}</div>
                            </div>
                            <div className="csfmc-it-right">
                                <div className="csfmc-excerpt animated slideInDown">
                                    <strong style={{color:"white", letterSpacing:"0px", lineHeight:"28px", textTransform:"uppercase", fontWeight:"bold"}}>{i.title}</strong>
                                    <p >{i.text}</p>
                                    <div style={{display:"flex", fontSize:"16px"}}>
                                        <PrimaryButton color="#16a500">READ THE CASE STUDY</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                <div className="csfmc-bottom-section">
                    {this.state.bottomRow.map(i => (
                        <div onClick={() => (this.handleClick(i.index))} className={ i.index == this.state.activeTab ? "csfmc-item-bottom active" : "csfmc-item-bottom"}>
                            <div className="csfmc-ib-img"><img src={i.image} style={{width:"73px", height:"73px"}} alt="" /></div>
                            <div className="csfmc-ib-title">{i.title}</div>
                            <div className="csfmc-ib-text">{i.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default Card10;