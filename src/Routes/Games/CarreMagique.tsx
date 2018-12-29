import React, { Component } from 'react';
// import './CarreMagique.scss';

interface ISelectedBox {
    i: number,
    j: number
}

interface CarreMagiqueProps {

}

interface CarreMagiqueState {
    array: number[][]
    selectedBoxes: ISelectedBox[]
}

class CarreMagique extends Component<CarreMagiqueProps, CarreMagiqueState> {
    
    constructor(props: CarreMagiqueProps){
        super(props)
        this.state = {
            array: [
                [25, 23, 28, 21, 26],
                [13, 11, 16,  9, 14],
                [20, 18, 23, 16, 21],
                [28, 26, 31, 24, 29],
                [11,  9, 14,  7, 12]
            ],
            selectedBoxes: []
        }
    }

    get sumSelected(){
        return this.state.selectedBoxes.reduce((sum: number, box) => sum += this.state.array[box.i][box.j], 0)
    }

    handleClickBox = (i: number, j: number) => {
        let exists = this.state.selectedBoxes.findIndex(box => box.i === i && box.j === j) !== -1
        this.setState({
            selectedBoxes: exists ? this.state.selectedBoxes.filter(b => !(b.i === i && b.j === j)) : this.state.selectedBoxes.concat({i, j})
        })
    }

    renderArray(){
        return this.state.array.map( (line: number[], i) => (
            <div key={i} className='carre-magique-line'>
                {line.map( (box: number, j) => (
                    <div 
                        className={"carre-magique-case" + (this.state.selectedBoxes.findIndex(b => b.i === i && b.j === j) !== -1 ? ' carre-magique-case-selected' : '') } 
                        key={j}
                        onClick={() => this.handleClickBox(i, j)}
                    >{box}</div> 
                ))}
            </div>
        ))
    }

    render() {
        return (
            <div className="carre-magique">
                <h2 className='carre-magique-title'>Carré magique</h2>
                <div className='carre-magique-array'>
                    {this.renderArray()}        
                </div>
                <div className="carre-magique-sum">Somme : {this.sumSelected}</div>
            </div>
        );
    }
}

export default CarreMagique;