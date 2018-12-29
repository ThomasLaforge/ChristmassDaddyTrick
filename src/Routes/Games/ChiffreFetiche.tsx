import React, { Component } from 'react';
import {Input} from '@material-ui/core'
// import './ChiffreFetiche.scss';

interface ChiffreFeticheProps {
    chiffre: number
    onUpdate: Function
}

interface ChiffreFeticheState {
}

class ChiffreFetiche extends Component<ChiffreFeticheProps, ChiffreFeticheState> {
    
    constructor(props: ChiffreFeticheProps){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="chiffre-fetiche">
                <h2 className="chiffre-fetiche-title">Chiffre fétiche</h2>
                <div className="chiffre-fetiche-instructions">
                    Pense à un nombre <br />
                    Mulitplie le avec <b>123456789</b> <br />
                    Mulitplie le par <b>9</b> <br />
                    Donne moi le nombre le plus souvent présent
                </div>
                <div className="chiffre-fetiche-resultat">
                    <div className="chiffre-fetiche-resultat-phrase">

                    </div>
                    <Input
                        className='chiffre-fetiche-resultat-input'
                        value={this.props.chiffre}
                        onChange={(e) => this.props.onUpdate(Number.parseInt(e.target.value) || 0)}
                    />  
                </div>
            </div>
        );
    }
}

export default ChiffreFetiche;