import React, { Component } from 'react';
// import './MathsFacile.scss';

interface MathsFacileProps {
    prediction: number
}

interface MathsFacileState {
}

class MathsFacile extends Component<MathsFacileProps, MathsFacileState> {
    
    constructor(props: MathsFacileProps){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="maths-facile">
                <h2 className="maths-facile-title">Pas trop gros le nombre...</h2>
                <div className="maths-facile-instructions">
                    Pense à un nombre <br />
                    Double ce nombre <br />
                    Ajoute {this.props.prediction * 2} <br />
                    Divise par 2 <br />
                    Retranche le nombre du départ <br />
                </div>
            </div>
        );
    }
}

export default MathsFacile;