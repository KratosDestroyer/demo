import React from 'react';
import LogoList from '../../components/logo-list/logo-list.component';

class Card extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            images: [
                { imageURL: 'https://www.machinemetrics.com/hubfs/logo_te-01.svg',
                  id: '1'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/logo_malibu.svg',
                  id: '2'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/logo_fastenal.svg',
                  id: '3'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/logo_lincoln-01.svg',
                  id: '4'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/logo_nov%20-01.svg',
                  id: '5'},
                 {imageURL: 'https://www.machinemetrics.com/hubfs/logo_saintgobain-01.svg',
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

export default Card;