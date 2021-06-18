import React from 'react';
import LogoList from '../../components/logo-list/logo-list.component';

class Card7 extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            images: [
                { imageURL: 'https://www.machinemetrics.com/hubfs/Artboard%201-Jul-01-2020-11-42-41-12-PM.svg',
                  id: '1'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/aws2.svg',
                  id: '2'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/IW.svg',
                  id: '3'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/BG.svg',
                  id: '4'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/XC.svg',
                  id: '5'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/MMS.svg',
                  id: '6'},
              ]
        }
    }

    render(){
        return(
            <div>
                <LogoList images={this.state.images}/>
            </div>
        );
    }
}

export default Card7;