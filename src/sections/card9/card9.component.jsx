import React from 'react';
import './card9.styles.scss';

class Card9 extends React.Component{
    constructor() {
        super();

        this.state = {
            data: [
                 {title: "QUICK TO DEPLOY",
                 subtitle: "Plug-and-play, simple to use, and easy to scale.",
                 image: "https://www.machinemetrics.com/hubfs/lighning-fast.svg",},
                 {title: "DATA IS INSTANTLY USABLE",
                 subtitle: "Eliminates time-consuming data tag mapping.",
                 image: "https://www.machinemetrics.com/hubfs/easily-connect.svg",},
                 {title: "DRIVE IMMEDIATE VALUE",
                 subtitle: "Out-of-the-box apps with no initial development required.",
                 image: "https://www.machinemetrics.com/hubfs/hit-the-ground.svg",},
                 {title: "CONNECTS TO EVERYTHING",
                 subtitle: "Easily integrates machine data across your digital factory.",
                 image: "https://www.machinemetrics.com/hubfs/immediate-value.svg",},
                 {title: "DEEP MANUFACTURING VERTICAL EXPERTISE",
                 subtitle: "Provides necessary context to enable data actionability.",
                 image: "https://www.machinemetrics.com/hubfs/smarter-data.svg",},
            ]
        }
    }

    render() {
        return(
        <div>
            <div className="card9-container">
                <div className="card3-fluid">
                    <div className="card3-fixed-container">
                        <div className="card3-fixed-container-cell">
                            <div className="card3-cell-title-row">
                                The MachineMetrics Difference
                            </div>
                            {this.state.data.map(i => (
                                <div className="image-text"> 
                                    <div className="card3-cell-image">
                                        <img src={i.image} alt="" style={{width:"3vw", height:"3vw"}} />
                                    </div>
                                     <div className="card3-cell-text">
                                        <div className="card3-cell-row-text">{i.title}</div>
                                        <div className="card3-cell-text-paragraph">{i.subtitle}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Card9;