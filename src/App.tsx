import React, { Component } from 'react';
import './App.scss';
import { Route } from './Model/UI';
import Games from './Routes/Games/Games';
import Result from './Routes/Result/Result';
import Decoder from './components/Decoder';

interface AppProps {

}

interface AppState {
    route: Route
    chiffrefetiche: number
    mathsFacilePrediction: number
    resultatCarreMagique: number
}

class App extends Component<AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props)
        this.state = {
            route: Route.Games,
            chiffrefetiche: 0,
            mathsFacilePrediction: 0,
            resultatCarreMagique: 0
        }
    }   

    render() {
        return (
            <div className="app">
                <h1 className='app-title'>Christmass daddy trick</h1>
                {this.state.route === Route.Games && 
                    <Games goToGift={(chiffrefetiche: number, mathsFacilePrediction: number, resultatCarreMagique: number) => this.setState({ route: Route.Result, resultatCarreMagique, chiffrefetiche, mathsFacilePrediction })} />
                }
                {this.state.route === Route.Result && 
                    <Result 
                        chiffrefetiche={this.state.chiffrefetiche}
                        mathsFacilePrediction={this.state.mathsFacilePrediction}
                        resultatCarreMagique={this.state.resultatCarreMagique}
                    />
                }
            </div>
        );
    }
}

export default App;
