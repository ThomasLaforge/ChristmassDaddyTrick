import React, { Component } from 'react';
import CarreMagique from './CarreMagique';
import ChiffreFetiche from './ChiffreFetiche';
import MathsFacile from './MathsFacile';
import { Button } from '@material-ui/core';
import Decoder from '../../components/Decoder';
// import './Games.scss';

interface GamesProps {
    goToGift: Function
}

interface GamesState {
    chiffrefetiche: number
    mathsFacilePrediction: number
    resultatCarreMagique: number
    defaultBRA: any
}

class Games extends Component<GamesProps, GamesState> {
    
    constructor(props: GamesProps){
        super(props)
        this.state = {
            mathsFacilePrediction: 12,
            resultatCarreMagique: 95,
            chiffrefetiche: 0,
            defaultBRA: {
                b: Math.floor(Math.random() * 100) + 1,
                r: Math.floor(Math.random() * 100) + 1,
                a: Math.floor(Math.random() * 100) + 1
            }
        }
    }

    updateChiffreFetiche = (newValue: number) => {
        this.setState({ chiffrefetiche: newValue })
    }

    render() {
        return (
            <div className="games">
                <div className='app-title'>Trois petits tours et puis... tu auras un bon indice pour ton cadeau !</div>
                <Decoder 
                    b={this.state.defaultBRA.b}
                    r={this.state.defaultBRA.r}
                    a={this.state.defaultBRA.a}
                />
                <div className="games-list">
                    <CarreMagique />
                    <ChiffreFetiche 
                        chiffre={this.state.chiffrefetiche}
                        onUpdate={this.updateChiffreFetiche}
                    />
                    <MathsFacile prediction={this.state.mathsFacilePrediction} />
                </div>
                <Button
                    className='go-to-gift-gift'
                    variant='raised'
                    onClick={() => this.props.goToGift(this.state.chiffrefetiche, this.state.mathsFacilePrediction, this.state.resultatCarreMagique)}
                >Je veux mon cadeau !!!</Button>
            </div>
        );
    }
}

export default Games;