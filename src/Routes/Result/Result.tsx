import React, { Component } from 'react';
import Decoder from '../../components/Decoder';
import { Button } from '@material-ui/core';
// import './Result.scss';

interface ResultProps {
    chiffrefetiche: number
    mathsFacilePrediction: number
    resultatCarreMagique: number
}

interface ResultState {
    showImage: boolean
}

class Result extends Component<ResultProps, ResultState> {
    
    constructor(props: ResultProps){
        super(props)
        this.state = {
            showImage: false
        }
    }

    render() {
        return (
            <div className="result">
                <Decoder
                    b={this.props.resultatCarreMagique}
                    r={this.props.chiffrefetiche}
                    a={this.props.mathsFacilePrediction}
                />
                {!this.state.showImage && 
                    <Button
                        variant='raised'
                        onClick={() => {this.setState({ showImage: true }) }}
                    >Ma prediction</Button>
                }
                {this.state.showImage && 
                    <div className='result-bra-img'>
                        Rendez-vous en juillet ! <br />
                        Allez, à l'entrainement! <br />
                        {'<3'}
                    </div>
                }
            </div>
        );
    }
}

export default Result;