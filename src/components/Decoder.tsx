import React, { PureComponent } from 'react';
// import './Decoder.scss';

interface DecoderProps {
    b: number
    r: number
    a: number
}

interface DecoderState {
}

class Decoder extends PureComponent<DecoderProps, DecoderState> {
    
    constructor(props: DecoderProps){
        super(props)
        this.state = {
        }
    }

    renderGrid(){
        return new Array(26)
            .fill(null)
            .map( (elt, i) => i)
            .map(number => {
                let letter = String.fromCharCode(65 + number);
                let num: number
                switch (letter) {
                    case 'B': num = this.props.b; break;
                    case 'R': num = this.props.r; break;
                    case 'A': num = this.props.a; break;
                    default: 
                        let randomNum;
                        while(!randomNum || [this.props.b, this.props.r, this.props.a].includes(randomNum)){
                            randomNum = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
                        }
                        num = randomNum; 
                    break;
                }

                return <div className='decoder-elt'>{letter} : {num}</div>
            })
    }

    render() {
        return (
            <div className="decoder">
                <div className="decoder-grid">
                    {this.renderGrid()}
                </div>
            </div>
        );
    }
}

export default Decoder;